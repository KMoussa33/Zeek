from flask import Blueprint, jsonify, abort, request
from ..models import Game, List, db

bp = Blueprint('games', __name__, url_prefix='/games')

@bp.route('', methods=['GET']) # decorator takes path and list of HTTP verbs
def index():
    games = Game.query.all() # ORM performs SELECT query
    result = []
    for g in games:
        result.append(g.serialize()) # build list of Games as dictionaries
    return jsonify(result) # return JSON response

@bp.route('/<int:id>', methods=['GET'])
def show(id: int):
    g = Game.query.get_or_404(id)
    return jsonify(g.serialize())

@bp.route('', methods=['POST'])
def create():
    # req must contain game_title and list_id
    if 'list_id' not in request.json or 'game_title' not in request.json:
        return abort(400)
    # list with id of list_id must exist
    List.query.get_or_404(request.json['list_id'])
    # construct comment
    g = Game(
        list_id=request.json['list_id'],
        game_title=request.json['game_title']
    )
    db.session.add(g) # prepare CREATE statement
    db.session.commit() # execute CREATE statement
    return jsonify(g.serialize())

@bp.route('/<int:id>', methods=['DELETE'])
def delete(id: int):
    g = Game.query.get_or_404(id)
    try:
        db.session.delete(g) # prepare DELETE statement
        db.session.commit() # execute DELETE statement
        return jsonify(True)
    except:
        # something went wrong
        return jsonify(False)
