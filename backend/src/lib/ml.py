from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow import expand_dims
from tensorflow.nn import softmax
import numpy as np

class MLEngine:
    CNN_IMAGE_LENGTH = 180
    CLASS_NAMES = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

    def __init__(self):
        self.cnn = load_model('./models/cnn.h5')   # initialize the convnet
        self.img_length = 180

    def predict(self, image):
        ''' Classifies the `image` as one of several flower types.
        '''
        img_array = img_to_array(image)            # convert PIL Image to numpy array     
        img_array = expand_dims(img_array, 0)      # create a single batch containing the numpy array

        logits = self.cnn.predict(img_array)       # make the prediction
        probs = softmax(logits[0])                 # convert logits to class probabilities

        predicted_class = self.CLASS_NAMES[np.argmax(probs)]    # get the predicted class
        confidence = float(100 * np.max(probs))                 # get the confidence

        return predicted_class, confidence         # return the results
