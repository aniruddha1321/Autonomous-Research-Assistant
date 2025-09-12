import arxiv
import requests
import time
from typing import List, Optional
from dataclasses import dataclass

@dataclass
class Paper:
    """paper data structure (for storing paper information)"""
    title: str
    authors: List[str]
    abstract: str
    published: str
    source: str
    paper_id: str
    url: str
    citation_count: int = 0  # Added citation count support

class ArXivRetriever:
    
    def __init__(self, max_results: int = 10, use_citations: bool = False):
        """
        Initialize ArXiv retriever
        
        Args:
            max_results: Default maximum number of results to return
            use_citations: Whether to fetch citation counts (slower but more accurate)
        """
        self.max_results = max_results
        self.client = arxiv.Client()
        self.use_citations = use_citations
        self.semantic_scholar_base = "https://api.semanticscholar.org/graph/v1/paper"
    
    def search_papers(self, query: str, max_results: Optional[int] = None, from_year: int = 2021) -> List[Paper]:
        """
        Search ArXiv for papers
        
        Args:
            query: Search query string
            max_results: Maximum number of results (uses default if None)
            from_year: Only return papers from this year onwards
            
        Returns:
            List of Paper objects
        """
        if max_results is None:
            max_results = self.max_results
        
        # Use a larger search to account for date filtering and citation fetching
        search_limit = max_results * 5 if self.use_citations else max_results * 3
        
        search = arxiv.Search(
            query=query,
            max_results=search_limit,
            sort_by=arxiv.SortCriterion.Relevance,
            sort_order=arxiv.SortOrder.Descending
        )
        
        papers = []
        try:
            for result in self.client.results(search):
                # Filter by date after retrieving
                if result.published.year >= from_year:
                    paper = Paper(
                        title=result.title,
                        authors=[author.name for author in result.authors],
                        abstract=result.summary,
                        published=result.published.strftime("%Y-%m-%d"),
                        source="arxiv",
                        paper_id=result.entry_id.split('/')[-1],
                        url=result.entry_id,
                        citation_count=0  # Will be updated if use_citations is True
                    )
                    papers.append(paper)
                    
        except Exception as e:
            print(f"Error searching ArXiv: {e}")
        
        # Fetch citation counts if enabled
        if self.use_citations and papers:
            print(f"    Fetching citation counts for {len(papers)} papers...")
            papers = self._add_citation_counts(papers)
            
            # Sort by citation count (descending)
            papers.sort(key=lambda p: p.citation_count, reverse=True)
            print(f"    Sorted papers by citation count")
        
        # Return top results
        return papers

    def _add_citation_counts(self, papers: List[Paper]) -> List[Paper]:
        """Add citation counts to papers using Semantic Scholar API"""
        updated_papers = []
        
        for i, paper in enumerate(papers):
            try:
                # Search Semantic Scholar by title
                search_url = f"{self.semantic_scholar_base}/graph/v1/paper/search"
                params = {
                    'query': paper.title,
                    'limit': 1,
                    'fields': 'citationCount,title'
                }
                
                response = requests.get(search_url, params=params)
                
                if response.status_code == 200:
                    data = response.json()
                    if data.get('data') and len(data['data']) > 0:
                        citation_count = data['data'][0].get('citationCount', 0)
                        
                        # Update the paper with citation count
                        updated_paper = Paper(
                            title=paper.title,
                            authors=paper.authors,
                            abstract=paper.abstract,
                            published=paper.published,
                            source=paper.source,
                            paper_id=paper.paper_id,
                            url=paper.url,
                            citation_count=citation_count
                        )
                        updated_papers.append(updated_paper)
                        
                        print(f"    Found {citation_count} citations for '{paper.title[:50]}...'")
                    else:
                        # No citation data found, keep original
                        updated_papers.append(paper)
                        print(f"    No citation data for '{paper.title[:50]}...'")
                else:
                    # API error, keep original
                    updated_papers.append(paper)
                    print(f"    API error for '{paper.title[:50]}...': {response.status_code}")
                
                # Add small delay to be respectful to the API
                time.sleep(0.1)
                
            except Exception as e:
                print(f"    Error fetching citations for '{paper.title[:50]}...': {e}")
                updated_papers.append(paper)
        
        return updated_papers

    def get_highly_cited_papers(self, query: str, min_citations: int = 10, max_results: Optional[int] = None, from_year: int = 2021) -> List[Paper]:
        """
        Get papers with high citation counts
        
        Args:
            query: Search query
            min_citations: Minimum citation count threshold
            max_results: Maximum number of results (uses default if None)
            from_year: Only return papers from this year onwards
            
        Returns:
            List of highly cited papers
        """
        if not self.use_citations:
            print("Citation counting is disabled. Use use_citations=True when creating ArXivRetriever.")
            return []
        
        # Get a larger set to find enough highly cited papers
        search_results = self.search_papers(query, max_results=(max_results or self.max_results) * 5, from_year=from_year)
        
        # Filter by citation count
        highly_cited = [paper for paper in search_results if paper.citation_count >= min_citations]
        
        # Return top results
        return highly_cited[:max_results or self.max_results][:max_results]