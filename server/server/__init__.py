# Used to initialize Flask Applicaton & Database

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
CORS(app)

print("Flask app initialized!")

import server.routes

