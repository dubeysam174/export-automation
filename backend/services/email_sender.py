import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("GMAIL_EMAIL")
PASSWORD = os.getenv("GMAIL_APP_PASSWORD")

print("EMAIL:", EMAIL)
print("PASSWORD LENGTH:", len(PASSWORD) if PASSWORD else None)


def send_email(receiver_email, pdf_path):
    try:
        msg = EmailMessage()

        msg["Subject"] = "Product Catalogue - Singing Bowls"
        msg["From"] = EMAIL
        msg["To"] = receiver_email

        msg.set_content(
            """
Hello,

Greetings!

Please find our Product Catalogue attached.

We look forward to working with you.

Regards,
ABC Handicrafts Exporters
"""
        )

        with open(pdf_path, "rb") as f:
            file_data = f.read()
            file_name = os.path.basename(pdf_path)

        msg.add_attachment(
            file_data,
            maintype="application",
            subtype="pdf",
            filename=file_name
        )

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL, PASSWORD)
            smtp.send_message(msg)

        print(f"Email sent to {receiver_email}")
        return True

    except Exception as e:
        print("EMAIL ERROR:", e)
        return False