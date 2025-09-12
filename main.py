from arxiv_retriever import ArXivRetriever
from pubmed_retriever import PubMedRetriever
from paper_storage import PaperStorage

def main():
    
    print("Automated Research Assistant")
    print("=" * 35)
    
    # retrievers and storage initialization
    arxiv_retriever = ArXivRetriever(max_results=5, use_citations=False)
    arxiv_retriever_with_citations = ArXivRetriever(max_results=5, use_citations=True)
    pubmed_retriever = PubMedRetriever()
    storage = PaperStorage()
    
    # existing papers count
    existing_count = storage.get_total_papers()
    if existing_count > 0:
        print(f"📚 Found {existing_count} previously stored papers")
        
        # Option to search stored papers
        search_stored = input("Search stored papers first? (y/n): ").strip().lower()
        if search_stored in ['y', 'yes']:
            keyword = input("Enter keyword to search stored papers: ").strip()
            if keyword:
                stored_results = storage.search_stored_papers(keyword)
                if stored_results:
                    print(f"\n📋 Found {len(stored_results)} stored papers matching '{keyword}':")
                    for i, paper in enumerate(stored_results[:5], 1):  # Show first 5
                        print(f"  {i}. {paper.title[:60]}...")
                        print(f"     Source: {paper.source.upper()} | Published: {paper.published}")
                else:
                    print(f"No stored papers found for '{keyword}'")
            print()
    
    while True:
        print("\n" + "=" * 50)
        print("NEW SEARCH")
        print("=" * 50)
        query = input("Enter your search query (or 'quit' to exit): ").strip()
        
        if query.lower() in ['quit', 'exit', 'q']:
            print("Thank you for using the Automated Research Assistant. Goodbye!")
            break
        
        if not query:
            print("Please enter a valid search query.")
            continue
        
        #  added simple spell check for now
        common_corrections = {
            'artificial intellignence': 'artificial intelligence',
            'articial intelligence': 'artificial intelligence', 
            'machien learning': 'machine learning',
            'deep learing': 'deep learning',
            'neural netowrks': 'neural networks',
            'convolutional networs': 'convolutional networks'
        }
        
        corrected_query = query
        for typo, correction in common_corrections.items():
            if typo.lower() in query.lower():
                corrected_query = query.lower().replace(typo.lower(), correction)
                print(f"🔧 Did you mean: '{corrected_query}'?")
                use_correction = input("Use corrected spelling? (y/n): ").strip().lower()
                if use_correction in ['y', 'yes', '']:
                    query = corrected_query
                    print(f"✅ Using: '{query}'")
                break
        
        print(f"\nSOURCE SELECTION")
        print("Available sources:")
        print("  1. ArXiv")
        print("  2. PubMed") 
        print("  3. Both (default)")
        
        source_choice = input("Select sources (1/2/3 or press Enter for both): ").strip()
        
        search_arxiv = True
        search_pubmed = True
        
        if source_choice == "1":
            search_arxiv = True
            search_pubmed = False
            print("Selected: ArXiv only")
        elif source_choice == "2":
            search_arxiv = False
            search_pubmed = True
            print("Selected: PubMed only")
        else:
            print("Selected: Both ArXiv and PubMed")

        print(f"\nYEAR FILTER")
        date_input = input("Search papers from year (default 2021): ").strip()
        
        try:
            from_year = int(date_input) if date_input else 2021
            if from_year < 1990 or from_year > 2025:
                from_year = 2021
        except ValueError:
            from_year = 2021
        
        print(f"✅ Searching papers from {from_year} onwards")
        
        print(f"\nRESULT COUNT")
        try:
            max_results = input("Number of papers per source (default 5): ").strip()
            max_results = int(max_results) if max_results else 5
            if max_results <= 0:
                max_results = 5
        except ValueError:
            max_results = 5
        
        print(f"Will retrieve up to {max_results} papers per source")
        
        # Step 4.5: Choose sorting method for ArXiv
        print(f"\nARXIV SORTING")
        print("Available sorting options:")
        print("  1. Relevance (default)")
        print("  2. Citation count (slower, more accurate)")
        
        sort_choice = input("Select ArXiv sorting (1/2 or press Enter for relevance): ").strip()
        
        use_citations = sort_choice == "2"
        if use_citations:
            print("Selected: Citation-based sorting (may take longer)")
        else:
            print("Selected: Relevance-based sorting")
        
        # Search summary
        print(f"\n" + "=" * 50)
        print(f"SEARCH SUMMARY")
        print(f"Query: '{query}'")
        print(f"Sources: {'ArXiv' if search_arxiv and not search_pubmed else 'PubMed' if search_pubmed and not search_arxiv else 'ArXiv + PubMed'}")
        print(f"ArXiv sorting: {'Citations' if use_citations else 'Relevance'}")
        print(f"From Year: {from_year}")
        print(f"Results per source: {max_results}")
        print("=" * 50)
        
        arxiv_papers = []
        pubmed_papers = []
        
        if search_arxiv:
            print(f"\nSearching ArXiv...")
            if use_citations:
                arxiv_papers = arxiv_retriever_with_citations.search_papers(query, max_results=max_results, from_year=from_year)
            else:
                arxiv_papers = arxiv_retriever.search_papers(query, max_results=max_results, from_year=from_year)
            
            print(f"Found {len(arxiv_papers)} papers from ArXiv")
            
            for i, paper in enumerate(arxiv_papers, 1):
                citation_info = f" | Citations: {paper.citation_count}" if hasattr(paper, 'citation_count') and paper.citation_count > 0 else ""
                print(f"  {i}. {paper.title[:70]}...")
                print(f"     Authors: {', '.join(paper.authors[:2])}{'...' if len(paper.authors) > 2 else ''}")
                print(f"     ID: {paper.paper_id} | Published: {paper.published}{citation_info}")
        
        if search_pubmed:
            print(f"\nSearching PubMed...")
            pubmed_papers = pubmed_retriever.search_papers(query, max_results=max_results, from_year=from_year)
            print(f"Found {len(pubmed_papers)} papers from PubMed")
            
            for i, paper in enumerate(pubmed_papers, 1):
                print(f"  {i}. {paper.title[:70]}...")
                print(f"     Authors: {', '.join(paper.authors[:2])}{'...' if len(paper.authors) > 2 else ''}")
                print(f"     PMID: {paper.paper_id} | Published: {paper.published}")
        
        # Summary and Storage
        total_papers = len(arxiv_papers) + len(pubmed_papers)
        print(f"\nSearch completed!")
        print(f"   Total papers: {total_papers}")
        if search_arxiv and search_pubmed:
            print(f"   ArXiv: {len(arxiv_papers)} | PubMed: {len(pubmed_papers)}")
        elif search_arxiv:
            print(f"   ArXiv: {len(arxiv_papers)}")
        else:
            print(f"   PubMed: {len(pubmed_papers)}")
        
        # Store papers
        if total_papers > 0:
            all_papers = arxiv_papers + pubmed_papers
            stored_count = storage.add_papers(all_papers, query)
            total_stored = storage.get_total_papers()
            print(f"Stored {stored_count} new papers (Total stored: {total_stored})")
            print(f"Data saved to: {storage.filename}")
        
        # Step 6: Option to display abstracts
        if total_papers > 0:
            show_details = input("\nShow paper abstracts? (y/n): ").strip().lower()
            if show_details in ['y', 'yes']:
                print("\n" + "=" * 50)
                print("PAPER ABSTRACTS")
                print("=" * 50)
                
                # Show ArXiv abstracts
                if arxiv_papers:
                    print("\nArXiv Papers:")
                    for i, paper in enumerate(arxiv_papers, 1):
                        print(f"\n{i}. {paper.title}")
                        print(f"   Authors: {', '.join(paper.authors)}")
                        print(f"   Published: {paper.published}")
                        print(f"   URL: {paper.url}")
                        print(f"   Abstract: {paper.abstract[:400]}...")
                
                # Show PubMed abstracts
                if pubmed_papers:
                    print("\nPubMed Papers:")
                    for i, paper in enumerate(pubmed_papers, 1):
                        print(f"\n{i}. {paper.title}")
                        print(f"   Authors: {', '.join(paper.authors)}")
                        print(f"   Published: {paper.published}")
                        print(f"   URL: {paper.url}")
                        print(f"   Abstract: {paper.abstract[:400]}...")

if __name__ == "__main__":
    main()