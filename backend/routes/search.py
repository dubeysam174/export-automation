from flask import Blueprint, request, jsonify

search_bp = Blueprint("search", __name__)

@search_bp.route("/search", methods=["POST"])
def search_buyers():
    data = request.get_json()

    keyword = data.get("keyword")

    return jsonify({
        "success": True,
        "keyword": keyword,
        "results": []
    })