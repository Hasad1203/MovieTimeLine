# Used to initialize Flask Applicaton & Database

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

print("Flask app initialized!")

import server.routes

