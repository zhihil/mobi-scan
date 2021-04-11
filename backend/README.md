# Backend
## Overview
This is a Python server built using Flask, to where the mobile app uploads images for prediction. 

## Todo
1. Put the server on HTTPS
2. Database connection for fun?
3. Add environment variables so that the backend only accepts CORS requests from the ngrok public endpoint
4. Add some flags to distinguish between prod and dev
5. Need to test this app and the frontend to make sure someone can install it and get it working end-to-end
6. Try integrating RabbitMQ to the backend

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
