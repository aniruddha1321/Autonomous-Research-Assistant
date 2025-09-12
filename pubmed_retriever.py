import requests
import xml.etree.ElementTree as ET
import time
from typing import List, Optional
from arxiv_retriever import Paper

class PubMedRetriever:
    
    def __init__(self, email: str = "research@example.com"):
        self.base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
        self.email = email
    
    def search_papers(self, query: str, max_results: int = 10, from_year: int = 2021) -> List[Paper]:
        papers = []
        
        try:
            date_filter = f" AND {from_year}:2025[dp]"
            filtered_query = query + date_filter
            
            search_url = f"{self.base_url}esearch.fcgi"
            search_params = {
                "db": "pubmed",
                "term": filtered_query,
                "retmax": max_results,
                "email": self.email,
                "retmode": "json",
                "sort": "relevance",
                "datetype": "pdat"
            }
            
            response = requests.get(search_url, params=search_params)
            response.raise_for_status()
            search_data = response.json()
            
            pmids = search_data.get("esearchresult", {}).get("idlist", [])
            
            if pmids:
                # paper details
                papers = self._fetch_paper_details(pmids, from_year)
            
            time.sleep(0.34)  # rate limit: 3 requests/sec
            
        except Exception as e:
            print(f"Error searching PubMed: {e}")
        
        return papers
    
    def _fetch_paper_details(self, pmids: List[str], from_year: int = 2021) -> List[Paper]:
        papers = []
        
        try:
            fetch_url = f"{self.base_url}efetch.fcgi"
            fetch_params = {
                "db": "pubmed",
                "id": ",".join(pmids),
                "retmode": "xml",
                "email": self.email
            }
            
            response = requests.get(fetch_url, params=fetch_params)
            response.raise_for_status()
            
            # Parse XML
            root = ET.fromstring(response.content)
            
            for article in root.findall(".//PubmedArticle"):
                paper = self._parse_pubmed_article(article, from_year)
                if paper:
                    papers.append(paper)
                    
        except Exception as e:
            print(f"Error fetching PubMed details: {e}")
        
        return papers
    
    def _parse_pubmed_article(self, article, from_year: int = 2021) -> Optional[Paper]:
        try:
            # PMID
            pmid_elem = article.find(".//PMID")
            pmid = pmid_elem.text if pmid_elem is not None else ""
            
            # title
            title_elem = article.find(".//ArticleTitle")
            title = title_elem.text if title_elem is not None else "No title"
            
            # abstract
            abstract_elem = article.find(".//AbstractText")
            abstract = abstract_elem.text if abstract_elem is not None else "No abstract available"
            
            # authors
            authors = []
            for author in article.findall(".//Author"):
                lastname = author.find("LastName")
                firstname = author.find("ForeName")
                if lastname is not None and firstname is not None:
                    authors.append(f"{firstname.text} {lastname.text}")
            
            # publication date
            pub_date = article.find(".//PubDate")
            published = "Unknown"
            pub_year = None
            
            if pub_date is not None:
                year = pub_date.find("Year")
                if year is not None:
                    pub_year = int(year.text)
                    published = f"{year.text}-01-01"
            
            # Filter by year
            if pub_year and pub_year < from_year:
                return None
            
            return Paper(
                title=title,
                authors=authors,
                abstract=abstract,
                published=published,
                source="pubmed",
                paper_id=pmid,
                url=f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
            )
            
        except Exception as e:
            print(f"Error parsing PubMed article: {e}")
            return None