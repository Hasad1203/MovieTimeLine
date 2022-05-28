# Used to specify back-end routing functions


from server import app
from server.models import User, Movie

print("Routes running successfully...")

@app.route('/', methods=['GET','POST'])
def home_page():
    return 'Welcome to MovieTimeLine Back End!'