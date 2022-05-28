# Main Driver

from server import app

if __name__ == "__main__":
    print("Flask app is now up and running!")
    app.run(debug=True)