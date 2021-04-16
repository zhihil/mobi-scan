from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow import expand_dims
from tensorflow.nn import softmax
import numpy as np

class MLEngine:
    CNN_IMAGE_LENGTH = 180
    CLASS_NAMES = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

    def __init__(self):
        self.cnn = load_model('./models/cnn.h5')
        self.img_length = 180

    def predict(self, image):
        img_array = img_to_array(image)
        img_array = expand_dims(img_array, 0)

        logits = self.cnn.predict(img_array)
        probs = softmax(logits[0])

        predicted_class = self.CLASS_NAMES[np.argmax(probs)]
        confidence = float(100 * np.max(probs))

        return predicted_class, confidence
