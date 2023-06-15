"""add users date_of_birth

Revision ID: 64b559955c07
Revises: 9d7e15e20bea
Create Date: 2023-06-15 11:23:19.013464

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64b559955c07'
down_revision = '9d7e15e20bea'
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
        ALTER TABLE users
        ADD COLUMN date_of_birth TIMESTAMP;
        """
    )


def downgrade():
    op.execute(
        """
        ALTER TABLE users
        DROP COLUMN date_of_birth;
        """
    )
