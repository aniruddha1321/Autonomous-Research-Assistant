# 🤖 Autonomous Research Assistant

An intelligent research assistant that automatically searches, retrieves, and organizes academic papers from multiple sources including ArXiv and PubMed. Built for researchers, students, and academics who need efficient literature surveys and paper management.

## 🌟 Features

### 📚 **Multi-Source Paper Retrieval**
- **ArXiv Integration**: Access to computer science, physics, and mathematics papers
- **PubMed Integration**: Biomedical and life sciences literature
- **Unified Search Interface**: Search across multiple databases simultaneously

### 🎯 **Advanced Search Capabilities**
- **Intelligent Ranking**: Citation-based or relevance-based sorting
- **Date Filtering**: Search papers from specific years (default: 2021+)
- **Spell Check**: Automatic correction for common research terms
- **Flexible Result Limits**: Customizable number of papers per source

### 💾 **Smart Storage & Management**
- **CSV-Based Storage**: Persistent paper storage with deduplication
- **Search History**: Automatic logging of search queries
- **Local Database**: Search previously retrieved papers
- **Export Options**: Easy data export for analysis

### 🔍 **Interactive Workflow**
1. **Query Input**: Natural language search queries
2. **Source Selection**: Choose ArXiv, PubMed, or both
3. **Date Filtering**: Specify publication year range
4. **Result Configuration**: Set number of papers per source
5. **Display Options**: View abstracts and detailed metadata

## 🚀 Quick Start

### Prerequisites
```bash
pip install arxiv requests python-dateutil
```

### Installation
```bash
git clone https://github.com/aniruddha1321/Autonomous-Research-Assistant.git
cd Autonomous-Research-Assistant
```

### Usage
```bash
python main.py
```

## 📖 Usage Examples

### Basic Search
```
Enter your search query: machine learning
Select sources: 3 (Both ArXiv and PubMed)
Search papers from year: 2022
Number of papers per source: 10
```

## 📁 Project Structure

```
Autonomous-Research-Assistant/
├── main.py                 # Main application interface
├── arxiv_retriever.py      # ArXiv API integration
├── pubmed_retriever.py     # PubMed API integration  
├── paper_storage.py        # CSV storage management
├── retrieved_papers.csv    # Paper database (auto-generated)
├── search_log.txt         # Search history (auto-generated)
└── README.md              # This file
```

## 🔧 Core Components

### 📄 **Paper Data Structure**
```python
@dataclass
class Paper:
    title: str
    authors: List[str] 
    abstract: str
    published: str
    url: str
    paper_id: str
    source: str
    citation_count: int = 0
```

### 🔍 **ArXiv Retriever**
- Citation-based ranking using Semantic Scholar API
- Date filtering with ArXiv query syntax
- Relevance and citation sorting options
- Rate limiting and error handling

### 🏥 **PubMed Retriever**
- NCBI E-utilities API integration
- Biomedical literature access
- XML parsing and metadata extraction
- Date filtering support

### 💾 **Paper Storage**
- CSV-based persistent storage
- Automatic deduplication
- Keyword search functionality
- Export and analysis capabilities

## 🛠️ Technical Details

### **APIs Used**
- **ArXiv API**: Free access, 3 requests/second limit
- **PubMed E-utilities**: Free access, 3 requests/second limit  
- **Semantic Scholar API**: Citation data (optional)

### **Data Storage**
- **Format**: CSV for compatibility
- **Deduplication**: Based on paper ID and source
- **Persistence**: Local file storage
- **Search**: Keyword matching across titles/abstracts

### **Performance**
- **Rate Limiting**: Respects API guidelines
- **Caching**: Stores results locally
- **Error Handling**: Graceful failure recovery
- **Memory Efficient**: Streaming data processing

## 📋 Todo / Roadmap

- [ ] **IEEE Xplore Integration**: Add engineering literature
- [ ] **Google Scholar API**: Enhanced citation data
- [ ] **PDF Download**: Automatic paper downloads
- [ ] **NLP Analysis**: Topic modeling and summarization
- [ ] **Web Interface**: GUI for easier interaction
- [ ] **Database Migration**: SQLite for better performance
- [ ] **Citation Networks**: Author and paper relationships

## 🐛 Known Issues

- Rate limiting may slow large searches
- Citation data depends on external API availability
- Some PubMed papers may lack abstracts

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ArXiv**: For providing free access to research papers
- **PubMed/NCBI**: For biomedical literature access
- **Semantic Scholar**: For citation data
- **Python Community**: For excellent libraries and tools

## 📞 Contact

**Aniruddha** - [@aniruddha1321](https://github.com/aniruddha1321)

Project Link: [https://github.com/aniruddha1321/Autonomous-Research-Assistant](https://github.com/aniruddha1321/Autonomous-Research-Assistant)

---

⭐ **Star this repository if it helped your research!** ⭐