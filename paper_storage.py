import csv
import os
from datetime import datetime
from typing import List
from arxiv_retriever import Paper

class PaperStorage:
    """cureently we are using csv storage only"""
    
    def __init__(self, filename: str = "retrieved_papers.csv"):
        self.filename = filename
        self.papers = []
        self._load_existing_papers()
    
    def _load_existing_papers(self):
        if os.path.exists(self.filename):
            try:
                with open(self.filename, 'r', encoding='utf-8', newline='') as file:
                    reader = csv.DictReader(file)
                    for row in reader:
                        paper = Paper(
                            title=row['title'],
                            authors=row['authors'].split(';') if row['authors'] else [],
                            abstract=row['abstract'],
                            published=row['published'],
                            source=row['source'],
                            paper_id=row['paper_id'],
                            url=row['url']
                        )
                        self.papers.append(paper)
            except Exception as e:
                print(f"Error loading existing papers: {e}")
    
    def add_papers(self, new_papers: List[Paper], query: str = "") -> int:
        # Add timestamp and query info
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        added_count = 0
        
        for paper in new_papers:
            # Check for duplicates based on paper_id and source
            if not any(p.paper_id == paper.paper_id and p.source == paper.source for p in self.papers):
                self.papers.append(paper)
                added_count += 1
        
        # Save to CSV
        self._save_to_csv(query, timestamp)
        
        return added_count
    
    def _save_to_csv(self, query: str = "", timestamp: str = ""):
        try:
            with open(self.filename, 'w', encoding='utf-8', newline='') as file:
                fieldnames = ['title', 'authors', 'abstract', 'published', 'source', 'paper_id', 'url']
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                
                writer.writeheader()
                for paper in self.papers:
                    writer.writerow({
                        'title': paper.title,
                        'authors': ';'.join(paper.authors),
                        'abstract': paper.abstract,
                        'published': paper.published,
                        'source': paper.source,
                        'paper_id': paper.paper_id,
                        'url': paper.url
                    })
            
            # Also create a search log
            log_filename = "search_log.txt"
            with open(log_filename, 'a', encoding='utf-8') as log_file:
                log_file.write(f"{timestamp} - Query: '{query}' - Total papers stored: {len(self.papers)}\n")
                
        except Exception as e:
            print(f"Error saving papers: {e}")
    
    def get_total_papers(self) -> int:
        return len(self.papers)
    
    def search_stored_papers(self, keyword: str) -> List[Paper]:
        keyword = keyword.lower()
        results = []
        
        for paper in self.papers:
            if (keyword in paper.title.lower() or 
                keyword in paper.abstract.lower() or 
                any(keyword in author.lower() for author in paper.authors)):
                results.append(paper)
        
        return results
    
    def get_papers_by_source(self, source: str) -> List[Paper]:
        return [paper for paper in self.papers if paper.source == source]
    
    def get_recent_papers(self, count: int = 10) -> List[Paper]:
        return self.papers[-count:] if len(self.papers) >= count else self.papers
    
    def export_to_csv(self, filename: str = None) -> str:
        if filename is None:
            filename = f"exported_papers_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        
        try:
            with open(filename, 'w', encoding='utf-8', newline='') as file:
                fieldnames = ['title', 'authors', 'abstract', 'published', 'source', 'paper_id', 'url']
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                
                writer.writeheader()
                for paper in self.papers:
                    writer.writerow({
                        'title': paper.title,
                        'authors': ';'.join(paper.authors),
                        'abstract': paper.abstract,
                        'published': paper.published,
                        'source': paper.source,
                        'paper_id': paper.paper_id,
                        'url': paper.url
                    })
            
            print(f"Papers exported to: {filename}")
            return filename
            
        except Exception as e:
            print(f"Error exporting papers: {e}")
            return ""