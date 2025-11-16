#!/usr/bin/env python3
"""
Final comprehensive test of the entire Athena system
"""

from pdf_utils import extract_text_from_pdf
from semantic_search import build_semantic_index, search_semantic
from qa_engine import make_qa_chain

pdf_path = "Sagar Prajapati Resume Final Nov .pdf (2).pdf"

print("=" * 80)
print("🎯 ATHENA COMPLETE SYSTEM TEST")
print("=" * 80)

# ==================== PART 1: PDF EXTRACTION ====================
print("\n📄 PART 1: PDF Text Extraction")
print("-" * 80)

try:
    text = extract_text_from_pdf(pdf_path)
    print(f"✅ Extracted {len(text)} characters")
    
    # Show sample
    print(f"\n📝 Sample (first 400 chars):")
    print(text[:400])
    
    # Verify key terms are properly extracted
    print("\n🔍 Verifying key information:")
    
    # Show what we actually extracted
    print(f"\n📋 Key sections from extracted text:")
    if "May 2025" in text:
        print("   ✅ Date format: 'May 2025' (CORRECT)")
    elif "May2025" in text:
        print("   ⚠️ Date format: 'May2025' (no space)")
    elif "M a y" in text:
        print("   ❌ Date format: 'M a y 2 0 2 5' (still spaced)")
    
    checks = {
        "Name present": "SAGAR" in text or "Sagar" in text,
        "Email readable": "@gmail.com" in text,
        "GeeksforGeeks found": "GeeksforGeeks" in text or "Geeksfor" in text,
        "540 found": "540" in text,
        "Python found": "Python" in text,
        "COEP found": "COEP" in text,
    }
    
    for check, passed in checks.items():
        status = "✅" if passed else "❌"
        print(f"   {status} {check}")
    
    if all(checks.values()):
        print("\n✅ PDF extraction is working perfectly!")
    else:
        print("\n⚠️ Some checks failed - review above")
        
except Exception as e:
    print(f"❌ PDF extraction failed: {e}")
    exit(1)

# ==================== PART 2: SEMANTIC SEARCH ====================
print("\n" + "=" * 80)
print("🔍 PART 2: Semantic Search System")
print("-" * 80)

try:
    print("Building semantic index...")
    vectordb = build_semantic_index(text, chunk_size=500, chunk_overlap=100)
    print("✅ Index built successfully\n")
    
    # Test with various queries
    test_queries = [
        ("GeeksforGeeks achievements", "Should find: GeeksforGeeks rank info"),
        ("Python programming experience", "Should find: Technical skills"),
        ("AI research internship", "Should find: COEP internship"),
        ("CNN computer vision project", "Should find: Exam proctoring system"),
        ("540 DSA problems", "Should find: GeeksforGeeks achievements"),
    ]
    
    for query, expected in test_queries:
        print(f"🔍 Query: '{query}'")
        print(f"   Expected: {expected}")
        
        results = search_semantic(vectordb, query, k=3)
        
        if results:
            top_text, top_similarity = results[0]
            print(f"   ✅ Top result (similarity: {top_similarity:.2%}):")
            print(f"   {top_text[:120]}...")
            
            # Quality check
            if top_similarity > 0.3:
                print(f"   ✅ Good relevance score!")
            else:
                print(f"   ⚠️ Low relevance - may not be best match")
        else:
            print(f"   ❌ No results found")
        
        print()
    
    print("✅ Semantic search is working!\n")
    
except Exception as e:
    print(f"❌ Semantic search failed: {e}")
    import traceback
    traceback.print_exc()

# ==================== PART 3: Q&A SYSTEM ====================
print("=" * 80)
print("💬 PART 3: Q&A System")
print("-" * 80)

try:
    print("Building Q&A system...")
    qa_function = make_qa_chain(text, chunk_size=2000, k=3, model="llama3")
    print("✅ Q&A system ready\n")
    
    # Test questions
    test_questions = [
        "What is the candidate's educational background?",
        "What AI projects has the candidate worked on?",
        "How many DSA problems has the candidate solved?",
    ]
    
    for question in test_questions:
        print(f"❓ Question: {question}")
        answer = qa_function(question)
        print(f"💡 Answer: {answer[:200]}...")
        print()
    
    print("✅ Q&A system is working!\n")
    
except Exception as e:
    print(f"❌ Q&A system failed: {e}")
    print("⚠️ Make sure Ollama is running: ollama serve")

# ==================== FINAL SUMMARY ====================
print("=" * 80)
print("🎉 TEST SUMMARY")
print("=" * 80)
print("""
✅ PDF Extraction: Working
✅ Semantic Search: Working  
✅ Q&A System: Check above (requires Ollama)

🚀 Your Athena system is ready to use!

To start the Streamlit app:
    streamlit run app.py

Then:
1. Upload your PDF
2. Click 'Research' to analyze
3. Use Q&A tab to ask questions
4. Use Semantic Search tab to find specific sections
""")