from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.search import search_bp
import os

app = Flask(
    __name__,
    static_folder="dist",
    static_url_path=""
)

CORS(app)

# Register API routes
app.register_blueprint(search_bp, url_prefix="/api")


@app.route("/api")
def api_home():
    return {
        "message": "Export Automation API Running"
    }


# Serve React App
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    file_path = os.path.join(app.static_folder, path)

    if path != "" and os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)

    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)