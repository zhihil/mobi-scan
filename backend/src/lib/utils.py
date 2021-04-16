from io import BytesIO
from PIL import Image
from base64 import b64decode

def parse_image_uri(imageURI):
    header, encoded = imageURI.split(",", 1)
    data = b64decode(encoded)
    buf = BytesIO(data)
    return Image.open(buf)

def resize_image(image, dim):
    return image.resize(dim)
                            