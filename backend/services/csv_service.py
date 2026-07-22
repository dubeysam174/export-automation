import csv

def save_to_csv(data):
    with open("buyers.csv", "w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)

        writer.writerow(["Title", "Website", "Emails"])

        for item in data:
            writer.writerow([
                item["title"],
                item["website"],
                ", ".join(item["emails"])
            ])