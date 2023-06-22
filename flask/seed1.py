"""
Populate Zeek database with fake data using the SQLAlchemy ORM.
"""

import random
import string
import hashlib
import secrets
from faker import Faker
from initdb.src.models import User, List, Comment, Game, db
from initdb.src import create_app

USER_COUNT = 50
LIST_COUNT = 10
COMMENT_COUNT = 200
GAME_COUNT = 100

def random_passhash():
    """Get hashed and salted password of length N | 8 <= N <= 15"""
    raw = ''.join(
        random.choices(
            string.ascii_letters + string.digits + '!@#$%&', # valid pw characters
            k=random.randint(8, 15) # length of pw
        )
    )

    salt = secrets.token_hex(16)

    return hashlib.sha512((raw + salt).encode('utf-8')).hexdigest()

def truncate_tables():
    """Delete all rows from database tables"""
    db.session.execute(User.query.delete())
    List.query.delete()
    Comment.query.delete()
    Game.query.delete()
    db.session.commit()

def main():
    """Main driver function"""
    app = create_app()
    app.app_context().push()
    truncate_tables()
    fake = Faker()

    last_user = None  # save last user
    for _ in range(USER_COUNT):
        last_user = User(
            username=fake.unique.first_name().lower() + str(random.randint(1,150)),
            password=random_passhash(),
            private=fake.random.boolean(),
            email=fake.internet.email()
        )
        db.session.add(last_user)

    # insert users
    db.session.commit()

    last_list = None  # save last list
    for _ in range(LIST_COUNT):
        last_list = List(
            title=fake.sentence(),
            user_id=random.randint(last_user.id - USER_COUNT + 1, last_user.id),
            private=fake.random.boolean(),
        )
        db.session.add(last_tweet)

    # insert tweets
    db.session.commit()

# run script
main()