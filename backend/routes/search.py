from flask import Blueprint, request, jsonify
from services.search_service import search_buyers
from services.email_extractor import extract_emails
from services.csv_service import save_to_csv
from services.email_sender import send_email

import csv
import os

search_bp = Blueprint("search_bp", __name__)


# -------------------------------
# Search Buyers
# -------------------------------
@search_bp.route("/search", methods=["GET"])
def search():

    keyword = request.args.get("keyword")

    if not keyword:
        return jsonify({
            "error": "Keyword is required"
        }), 400

    websites = search_buyers(keyword)

    final_data = []

    for website in websites:

        emails = extract_emails(website["link"])

        final_data.append({
            "title": website["title"],
            "website": website["link"],
            "emails": emails
        })

    # Save data into CSV
    save_to_csv(final_data)

    return jsonify(final_data)


# -------------------------------
# Test Email Extractor
# -------------------------------
@search_bp.route("/test", methods=["GET"])
def test():

    emails = extract_emails("https://www.dharmashop.com")

    return jsonify({
        "emails": emails
    })


# -------------------------------
# Send Emails
# -------------------------------
@search_bp.route("/send", methods=["POST"])
def send():

    pdf_path = "presentation.pdf"

    if not os.path.exists(pdf_path):
        return jsonify({
            "message": "presentation.pdf not found"
        }), 404

    sent = 0
    failed = 0

    try:

        with open("buyers.csv", newline="", encoding="utf-8") as csvfile:

            reader = csv.DictReader(csvfile)

            for row in reader:

                emails = row["Emails"]

                if emails.strip() == "":
                    continue

                email_list = emails.split(",")

                for email in email_list:

                    email = email.strip()

                    if send_email(email, pdf_path):
                        sent += 1
                    else:
                        failed += 1

        return jsonify({
            "message": "Emails sent successfully",
            "sent": sent,
            "failed": failed
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500