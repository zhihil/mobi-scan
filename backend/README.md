# Backend, Flask Server with ML Model

---

## Overview
This is a Flask server which loads a machine learning model with TensorFlow. It accepts requests from the React client, parses the data URI into a PIL `Image` class, and returns the predicted class. 

## Setup

1. Go to the `/backend` folder 
2. Run the following:

```bash
python3 -m venv ./venv
source ./venv/bin/activate
pip install -r requirements.txt
```

3. Execute `./scripts/rundev.sh` to start the server.

```bash
chmod 755 ./scripts/rundev.sh
./scripts/rundev.sh
```

- **NOTE:** The `rundev.sh` script simply sets environment variables telling Flask what the server entry-point is and then starts Flask. You can learn more about the script [here](https://flask.palletsprojects.com/en/1.1.x/quickstart/). The `rundev.sh` script essentially just runs the following lines:

```bash
export FLASK_APP=hello.py
flask run
```

## Skills Demonstrated

- Ability to learn quickly - Learned Flask, HTTP request with form data, data URIs, and PIL quickly to build the project.
- Flask
  - Setting CORS 
  - Creating a CRUD endpoint
- Deploying a machine learning model to a server
  - Loading the model
  - Preprocessing input data into a format accepted by the convnet.
  - Applying softmax to convert logits into interpretable probabilities. 

