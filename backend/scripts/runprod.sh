#!/bin/bash
export FLASK_ENV=production
export FLASK_APP=src/index.py
flask run --host=0.0.0.0
