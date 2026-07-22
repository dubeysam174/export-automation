from serpapi import GoogleSearch
import os
from dotenv import load_dotenv

load_dotenv()

SERP_API_KEY = os.getenv("SERP_API_KEY")


def search_buyers(query):
    params = {
        "engine": "google",
        "q": query,
        "api_key": SERP_API_KEY,
        "num": 10,
    }

    search = GoogleSearch(params)
    results = search.get_dict()

    websites = []

    for item in results.get("organic_results", []):
        websites.append({
            "title": item.get("title"),
            "link": item.get("link"),
            "snippet": item.get("snippet")
        })

    return websites