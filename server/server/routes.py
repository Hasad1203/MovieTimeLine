# Used to specify back-end routing functions
from server import app
from server.helpers import render_page
from server.models import User, Movie, db_session
from flask import request, jsonify
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from imdb import Cinemagoer
from datetime import datetime
import json

print("Routes running successfully...")

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(username):
    return db_session.query(User).filter_by(id=username).first()

@app.route('/reg', methods=['GET','POST'])
def registration():
    username =  json.loads(request.data.decode("utf-8"))['username']
    password = json.loads(request.data.decode("utf-8"))['password']
    
    user_exists = db_session.query(User).filter_by(id=username).first()
    if user_exists:
        return jsonify("1")

    new_user = User(id=username, password=password, movie_ids='')
    db_session.add(new_user)
    db_session.commit()

    return jsonify("0")

@app.route('/login', methods=['GET','POST'])
def login():
    username =  json.loads(request.data.decode("utf-8"))['username']
    password = json.loads(request.data.decode("utf-8"))['password']

    user_exists = db_session.query(User).filter_by(id=username).first()
    if user_exists:
        if user_exists.password != password:
            return jsonify("1")
    else:
        return jsonify("1")
    
    login_user(user_exists)

    print("1.", current_user.is_authenticated)

    return jsonify(username)

@app.route('/logout', methods=['GET','POST'])
@login_required
def logout():
    logout_user()
    return jsonify("0")

@app.route('/add', methods=['GET','POST'])
@login_required
def add_movie():
    ia = Cinemagoer()

    movie_query = ia.search_movie(json.loads(request.data.decode("utf-8"))['movie'])

    movie_exists_in_db = db_session.query(Movie).filter_by(movie_id=movie_query[0].movieID).first()

    if not movie_exists_in_db:

        movie = ia.get_movie(movie_query[0].movieID)

        print("TITLE", movie["directed by"])

        if not movie["directed by"]:
            return jsonify("1")

        directors = []

        for element in movie['directed by']:
            directors.append(element['name'])

        try:
            release_date_datetime_object = datetime.strptime(ia.get_movie_release_dates(movie_query[0].movieID)['data']['raw release dates'][0]['date'], "%d %B %Y")
            release_date_string = release_date_datetime_object.strftime("%m/%d/%Y")
        except ValueError:
            try:
                release_date_datetime_object = datetime.strptime(ia.get_movie_release_dates(movie_query[0].movieID)['data']['raw release dates'][0]['date'], "%B %Y")
                release_date_string = release_date_datetime_object.strftime("%m/01/%Y")
            except ValueError:
                release_date_datetime_object = datetime.strptime(ia.get_movie_release_dates(movie_query[0].movieID)['data']['raw release dates'][0]['date'], " %Y")
                release_date_string = release_date_datetime_object.strftime("01/01/%Y")


        new_movie = Movie(
            movie_id=movie_query[0].movieID, 
            title=movie['title'], 
            directors=','.join(directors), 
            cover_url = movie['full-size cover url'], 
            plot_summary=movie['plot summary'][0],
            release_date = release_date_string
        )

        print("HEY", new_movie)

        db_session.add(new_movie)
        db_session.commit()
        

    update_user = db_session.query(User).filter_by(id=current_user.id).first()
    current_movie_ids = update_user.movie_ids
    current_movie_ids_list = current_movie_ids.split(',')
    if not movie_query[0].movieID in current_movie_ids_list:
        current_movie_ids_list.append(movie_query[0].movieID)
        current_movie_ids_string = ','.join(current_movie_ids_list)
        update_user.movie_ids = current_movie_ids_string
        db_session.commit()

    return render_page(current_user, db_session)


@app.route('/display', methods=['GET','POST'])
@login_required
def return_movies():
    return render_page(current_user, db_session)

@app.route('/delete', methods=['GET','POST'])
@login_required
def delete_movie():
    deletion_id = json.loads(request.data.decode("utf-8"))['movie_id']
    print(deletion_id)
    current_user_lg = db_session.query(User).filter_by(id=current_user.id).first()
    current_user_movies = current_user_lg.movie_ids
    current_user_movies_list = current_user_movies.split(',')
    index_to_delete = 0
    for i in range(len(current_user_movies_list)):
        print(current_user_movies_list[i])
        if current_user_movies_list[i] == deletion_id:
            index_to_delete = i
            break
    current_user_movies_list.pop(index_to_delete)
    current_user_movies_ids_string = ','.join(current_user_movies_list)
    print(current_user_movies_ids_string)
    current_user_lg.movie_ids = current_user_movies_ids_string
    db_session.commit()

    return render_page(current_user, db_session)

    








