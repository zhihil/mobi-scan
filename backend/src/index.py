# dependencies
import os

from flask import Flask, flash, request, request, redirect, url_for, send_from_directory
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

from lib.ml import MLEngine
from lib.utils import parse_image_uri, resize_image
from lib.constants import UPLOAD_FOLDER, ALLOWED_EXTENSIONS, FRONTEND_ORIGIN

# app setup
app = Flask(__name__)
app.config['SECRET_KEY'] = 'love is here by Starsailor'

# cors setup
resources = {
    r'/image' : { 'origins' : FRONTEND_ORIGIN, 'methods' : ['GET', 'POST'] },
}
cors = CORS(app, resources=resources)

# machine learning
mlengine = MLEngine()

# routes
@app.route("/image", methods=["POST"])
def upload_file():
    if "file" not in request.form:
        return "No file part", 400

    # Detach the image (in data URI form) from the format
    image_data_uri = request.form["file"]

    # Parse the data URI into a PIL Image object
    img = parse_image_uri(image_data_uri)

    # Resize the PIL Image to meet the convnet's input dimension. This will distort
    # the aspect ratio, but this might be fine since the convnet was never trained with
    # images that preserved aspect ratio.
    img = resize_image(img, (MLEngine.CNN_IMAGE_LENGTH, MLEngine.CNN_IMAGE_LENGTH))

    # Make the prediction
    pred_class, confidence = mlengine.predict(img)

    # Send the response
    return { "predicted_class" : pred_class, "confidence" : confidence }, 200

# main
if __name__ == "__main__":
    app.run()
