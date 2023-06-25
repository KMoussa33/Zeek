from flask import Blueprint, jsonify, abort, request
from ..models import List, User, db

bp = Blueprint('lists', __name__, url_prefix='/lists')

@bp.route('', methods=['GET']) # decorator takes path and list of HTTP verbs
def index():
    lists = List.query.all() # ORM performs SELECT query
    result = []
    for l in lists:
        result.append(l.serialize()) # build list as dictionaries
    return jsonify(result) # return JSON response

@bp.route('/<int:id>', methods=['GET'])
def show(id: int):
    l = List.query.get_or_404(id)
    return jsonify(l.serialize())

@bp.route('', methods=['POST'])
def create():
    # req body must contain user_id and title
    if 'user_id' not in request.json or 'title' not in request.json:
        return abort(400)
    # user with id of user_id must exist
    User.query.get_or_404(request.json['user_id'])
    # construct comment
    l = List(
        user_id=request.json['user_id'],
        title=request.json['title']
    )
    db.session.add(l) # prepare CREATE statement
    db.session.commit() # execute CREATE statement
    return jsonify(l.serialize())

@bp.route('/<int:id>', methods=['DELETE'])
def delete(id: int):
    l = List.query.get_or_404(id)
    try:
        db.session.delete(l) # prepare DELETE statement
        db.session.commit() # execute DELETE statement
        return jsonify(True)
    except:
        # something went wrong
        return jsonify(False)
