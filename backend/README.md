# Backend
## Overview
This is a Python server built using Flask, to where the mobile app uploads images for prediction. 

## Setup
1. Install the dependencies
```bash
pip install -r requirements.txt
```
2. Run the server on development
```bash
export FLASK_ENV=development
export FLASK_APP=index.py
flask run
```
3. (Optional) Use Ngrok to expose the server to the public. This is necessary for the MobiScan mobile app to access the server
```bash
ngrok http 5000
```
