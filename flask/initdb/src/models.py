import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(128), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    private = db.Column(db.Boolean, nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    users_lists = db.relationship('List')
    users_comments = db.relationship('Comment')

    def __init__(self, username: str, password: str, private: bool, email: str):
        self.username = username
        self.password = password
        self.private = private
        self.email = email

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'private': self.private
        }
    
class List(db.Model):
    __tablename__='lists'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(128), unique=True, nullable=False)
    private = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    lists_users = db.relationship('User')
    lists_comments = db.relationship('Comment')
    lists_games = db.relationship('Game')

    def __init__(self, title: str, private: bool):
        self.title = title
        self.private = private

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'private': self.private,
            'user_id': self.user_id
        }
    
class Comment(db.Model):
    __tablename__='comments'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    content = db.Column(db.String(280), nullable=False)
    created_at = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
        nullable=False
    )
    private = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'), nullable=False)
    comments_users = db.relationship('User')
    comments_lists = db.relationship('List')

    def __init__(self, content: str, user_id: int, private: bool, list_id: int):
        self.content = content
        self.user_id = user_id
        self.list_id = list_id
        self.private = private

    def serialize(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at.isoformat(),
            'user_id': self.user_id,
            'private': self.private,
            'list_id': self.list_id
        }
    
    # CHECK IF THERE SHOULD BE A SEPARATE TABLE TO HOLD USER & LIST IDS FOR COMMENTS.

class Game(db.Model):
    __tablename__='games'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    game_title = db.Column(db.String(128), unique=True, nullable=False)
    release_date = db.Column(
        db.DateTime,
        default=datetime.datetime.utcnow,
    )
    developer = db.Column(db.String(128))
    genre = db.Column(db.String(128))
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'), nullable=False)
    games_lists = db.relationship('List')

    def __init__(self, game_title: str, genre: str, list_id: int):
        self.game_title = game_title
        self.genre = genre
        self.list_id = list_id

    def serialize(self):
        return {
            'id': self.id,
            'game_title': self.game_title,
            'release_date': self.release_date,
            'developer': self.developer,
            'genre': self.genre,
            'list_id': self.list_id
        }