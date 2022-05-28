# Used to specify back-end routing functions
from server import app
from server.models import User, Movie, db_session
from flask import request, jsonify
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from imdb import Cinemagoer
from datetime import datetime

print("Routes running successfully...")

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(username):
    return db_session.query(User).filter_by(id=username).first()

@app.route('/reg', methods=['GET','POST'])
def registration():
    if db_session.query(User).filter_by(id='hasad1203'):
        db_session.delete(db_session.query(User).filter_by(id='hasad1203').first())
        db_session.commit()
    new_user = User(id='hasad1203', password='applesauce', movie_ids='1')
    db_session.add(new_user)
    db_session.commit()

    login_user(new_user)

    string = "You have been registered!"

    return string

@app.route('/login', methods=['GET','POST'])
@login_required
def login():
    return current_user.id

@app.route('/logout', methods=['GET','POST'])
@login_required
def logout():
    logout_user()
    return 'You have been logged out!'

@app.route('/add', methods=['GET','POST'])
@login_required
def add_movie():
    ia = Cinemagoer()

    movie_query = ia.search_movie('avengers endgame')

    movie_exists_in_db = db_session.query(Movie).filter_by(movie_id=movie_query[0].movieID)

    if movie_exists_in_db == None:

        movie = ia.get_movie(movie_query[0].movieID)

        directors = []

        for element in movie['directed by']:
            directors.append(element['name'])

        release_date_datetime_object = datetime.strptime(ia.get_movie_release_dates(movie_query[0].movieID)['data']['raw release dates'][0]['date'], "%d %B %Y")

        release_date_string = release_date_datetime_object.strftime("%m/%d/%Y")


        new_movie = Movie(
            movie_id=movie_query[0].movieID, 
            title=movie['title'], 
            directors=','.join(directors), 
            cover_url = movie['cover'], 
            plot_summary=movie['plot summary'],
            release_date = release_date_string
        )

        db_session.add(new_movie)
        db_session.commit()

    update_user = db_session.query(User).filter_by(id=current_user.id).first()
    current_movie_ids = update_user.movie_ids
    current_movie_ids_list = current_movie_ids.split(',')
    current_movie_ids_list.append(movie_query[0].movieID)
    current_movie_ids_string = ','.join(current_movie_ids_list)
    update_user.movie_ids = current_movie_ids_string
    db_session.commit()
    return


@app.route('/display', methods=['GET','POST'])
@login_required
def return_movies():
    current_user = db_session.query(User).filter_by(id=current_user.id).first()
    current_user_movies = current_user.movie_ids
    current_user_movies_list = current_user_movies.split(',')
    movie_objects = []
    for element in current_user_movies_list:
        current_movie = db_session.query(Movie).filter_by(movie_id = element).first()
        current_movie_object = {'movie_id':current_movie.movie_id, 
        'title':current_movie.title, 
        'directors':current_movie.directors, 
        'cover_url':current_movie.cover_url, 
        'plot_summary':current_movie.plot_summary,
        'release_date':current_movie.release_date}
        movie_objects.append(current_movie_object)
        movie_objects = sorted(movie_objects, key=lambda d: datetime.strptime(d['release date'], "%d %B %Y")) 
    return jsonify(movie_objects)







