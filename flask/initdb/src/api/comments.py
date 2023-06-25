from flask import Blueprint, jsonify, abort, request
from ..models import Comment, User, db

bp = Blueprint('comments', __name__, url_prefix='/comments')

@bp.route('', methods=['GET']) # decorator takes path and list of HTTP verbs
def index():
    comments = Comment.query.all() # ORM performs SELECT query
    result = []
    for c in comments:
        result.append(c.serialize()) # build list of Comments as dictionaries
    return jsonify(result) # return JSON response

@bp.route('/<int:id>', methods=['GET'])
def show(id: int):
    c = Comment.query.get_or_404(id)
    return jsonify(c.serialize())

@bp.route('', methods=['POST'])
def create():
    # req body must contain user_id and content
    if 'user_id' not in request.json or 'content' not in request.json:
        return abort(400)
    # user with id of user_id must exist
    User.query.get_or_404(request.json['user_id'])
    # construct comment
    c = Comment(
        user_id=request.json['user_id'],
        content=request.json['content']
    )
    db.session.add(c) # prepare CREATE statement
    db.session.commit() # execute CREATE statement
    return jsonify(c.serialize())

@bp.route('/<int:id>', methods=['DELETE'])
def delete(id: int):
    c = Comment.query.get_or_404(id)
    try:
        db.session.delete(c) # prepare DELETE statement
        db.session.commit() # execute DELETE statement
        return jsonify(True)
    except:
        # something went wrong
        return jsonify(False)
