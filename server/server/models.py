# Used to define tables in the Database

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, Session
from sqlalchemy_utils import JSONType


Base = declarative_base()

class User(Base):
    __tablename__ = 'user'

    username = Column(String, primary_key=True)
    password = Column(String)
    movie_ids = Column(JSONType)

class Movie(Base):
    __tablename__ = 'movie'

    movie_id = Column(Integer, primary_key=True)
    title = Column(String)
    release_date = Column(String)
    directors = Column(String)

engine = create_engine('postgresql://hamza:uI55Ooz_c9Glepdnj6b_rA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dhamza-cluster-2328')

session = Session(engine)

print("Database setup successfully")


