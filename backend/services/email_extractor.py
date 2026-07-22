import requests
import re
from urllib.parse import urljoin

EMAIL_REGEX = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

def get_emails(url):
    emails = set()

    try:
        response = requests.get(url, headers=HEADERS, timeout=10)

        # 👇 Add these lines
        print("=" * 50)
        print("STATUS:", response.status_code)
        print("URL:", response.url)
        print(response.text[:1000])
        print("=" * 50)

        if response.status_code == 200:
            found = re.findall(EMAIL_REGEX, response.text)
            emails.update(found)

    except Exception as e:
        print(f"Error: {url} -> {e}")

    return emails


def extract_emails(url):
    emails = set()

    emails.update(get_emails(url))

    pages = [
        "/contact",
        "/contact-us",
        "/about",
        "/about-us"
    ]

    for page in pages:
        emails.update(get_emails(urljoin(url, page)))

    return list(emails)