# Used to define tables in the Database

import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, Session
from flask_login import UserMixin

Base = declarative_base()

class User(Base, UserMixin):
    __tablename__ = 'user'

    id = Column(String, primary_key=True)
    password = Column(String)
    movie_ids = Column(String)

class Movie(Base):
    __tablename__ = 'movie'

    movie_id = Column(String, primary_key=True)
    title = Column(String)
    release_date = Column(String)
    directors = Column(String)
    cover_url = Column(String)
    plot_summary = Column(String)

engine = create_engine(f"cockroachdb://hamza:{os.environ['PASS']}Q@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dhamza-cluster-2381")

Base.metadata.create_all(engine)

db_session = Session(engine)

print("Database setup successfully")


