# Main Driver

from server import app

if __name__ == "__main__":
    app.run(debug=True)
    print("Flask app is now up and running!")