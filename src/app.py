from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

JSON_DATA_FILE = "form_data.json"


def load_file():
    if not os.path.exists(JSON_DATA_FILE):
        return []

    with open(JSON_DATA_FILE, "r") as file:
        return json.load(file)


def save_file(data):
    with open(JSON_DATA_FILE, "w") as file:
        json.dump(data, file)


@app.route("/submit", methods=["POST"])
def submit_form():
    new_data = request.json

    existing_data = load_file()
    existing_data.append(new_data)
    save_file(existing_data)

    return jsonify({"message": "Form saved successfully!"}), 200


if __name__ == "__main__":
    app.run(debug=True)
