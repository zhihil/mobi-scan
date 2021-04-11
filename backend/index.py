# dependencies
import os
import tensorflow as tf
from flask import Flask, flash, request, request, redirect, url_for, send_from_directory
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

# image upload constants
UPLOAD_FOLDER = "./scratch"
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

# cors configuration
FRONTEND_ORIGIN = 'http://localhost:3000'

# app setup
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SECRET_KEY'] = 'love is here by Starsailor'

# cors setup
resources = {
    r'/image' : { 'origins' : FRONTEND_ORIGIN, 'methods' : ['GET', 'POST'] },
    r'/uploads/*' : { 'origins': FRONTEND_ORIGIN }
}
cors = CORS(app, resources=resources)

# utilities
def allowed_file(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# machine learning model
cnn = tf.keras.models.load_model('./models/cnn.h5')

# routes
@app.route("/image", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        # Check if the POST request has the file part
        if "file" not in request.files:
            flash("No file part")
            return "No file part"

    file = request.files["file"]

    # If the user does not select file, browser also submits an empty part without filename
    if file.filename == "":
        flash("No selected file")
        return "No selected file"

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        return redirect(url_for("uploaded_file",
                                filename=filename))

    return "No access"

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"],
                               filename)

# main
if __name__ == "__main__":
    app.run()
