from flask import Blueprint, request, jsonify
from services.search_service import search_buyers

search_bp = Blueprint("search_bp", __name__)


@search_bp.route("/search", methods=["GET"])
def search():
    keyword = request.args.get("keyword")

    if not keyword:
        return jsonify({
            "success": False,
            "message": "Keyword is required"
        }), 400

    try:
        results = search_buyers(keyword)

        return jsonify({
            "success": True,
            "results": results
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500