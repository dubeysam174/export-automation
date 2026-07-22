from flask import Flask
from flask_cors import CORS
from routes.search import search_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(search_bp, url_prefix="/api")

@app.route("/")
def home():
    return {
        "success": True,
        "message": "Backend Running"
    }

if __name__ == "__main__":
    app.run(debug=True)