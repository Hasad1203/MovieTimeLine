# Used for any helper functions

from server.models import User, Movie
from datetime import datetime 
from flask import jsonify

def render_page(current_user, db_session):
    current_user_lg = db_session.query(User).filter_by(id=current_user.id).first()
    current_user_movies = current_user_lg.movie_ids
    current_user_movies_list = current_user_movies.split(',')
    movie_objects = []
    if current_user_movies_list == ['']:
        return jsonify("1")
    if current_user_movies_list[0] == '':
        current_user_movies_list.pop(0)
    for element in current_user_movies_list:
        current_movie = db_session.query(Movie).filter_by(movie_id = element).first()
        current_movie_object = {'movie_id':current_movie.movie_id, 
        'title':current_movie.title, 
        'directors':current_movie.directors.split(','), 
        'cover_url':current_movie.cover_url, 
        'plot_summary':current_movie.plot_summary,
        'release_date':current_movie.release_date}
        movie_objects.append(current_movie_object)
    movie_objects = sorted(movie_objects, key=lambda d: datetime.strptime(d['release_date'], "%m/%d/%Y")) 
    
    return jsonify(movie_objects)