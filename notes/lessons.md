# Lessons
## Description
This document contains some things I learned from building this project.

## Lessons
1. Building a simple web application with Flask
2. CORS
3. Uploading an image to a Flask webserver using a form containing the file in a KVP
4. Be careful when communicating from an HTTPS site to a HTTP site.
5. How to construct an HTTP request with Axios and a FormData object
6. [CLEAN] - A request to endpoint A that allows the origin, which also calls endpoint B that does not allow the origin will fail, because flask_cors will not allow endpoint A to bypass the CORS policy on endpoint B, possibly exposing restricted information to a malicious origin.
