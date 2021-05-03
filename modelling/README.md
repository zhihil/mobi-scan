# Modelling, Image Classification Convnet

---

## Overview
This is the notebook used to develop the Convolutional Neural Network that powers Mobi-Scan.

## Setup

This notebook was written in [Google Colab](https://colab.research.google.com), a browser-based platform for running Jupyter notebooks with GPU support. 

To run this project:

1. Upload the `.ipynb` file to Google Drive - OR - visit this [link](https://colab.research.google.com/drive/1ug7GxEL9n8gUMafQHGzqktaU4OsnoDU5?usp=sharing) and copy the `.ipynb` file to your local Drive. 
2. Open the `.ipynb` file on your Google Drive
3. Click Runtime > Run All to run the notebook.

Note, this notebook will attempt to **save the trained model onto your Google drive**. The code responsible for this is found at the very bottom of the notebook.

```python
from google.colab import drive
drive.mount('/content/gdrive')
model2.save("/content/gdrive/My Drive/Colab Models/cnn2.h5")
```

The model will saved to `/My Drive/ Colab Models/cnn2.h5`, which you can access and inspect.

**NOTE:** Unfortunately, I don't have a GPU on my desktop, so I cannot guarantee if this will run properly on a local setup.

## Skills Demonstrated

For recruiters, you will see the following skills being demonstrated in this project:

- Basic tasks like loading data.
- Using `matplotlib` to visualize the training data.
- Basic data preprocessing, e.g, randomization of the dataset with `.shuffle()`
- Constructing convnets - Building the convolution layers (detect), ReLU activation (filter), and finally the maximum pooling (condense). 
- Understanding the basic architecture of a convnet: (1) a base that learns feature engineering on images, (2) a classifier head that performs the main classifcation.
  - Although not demonstrated, the concept of transfer learning: a base can be pretrained and paired with any classifier head. 
- Identifying underfitting and overfitting with the use of training vs. validation curves.
- Using a `Dropout` layer to break contrived connections in a convnet and reduce overfitting.
- Using data augmentation to generate adversarial inputs with "meaningful" noise that will help the model learn more robust neural network weights. 
- Saving models into an `.h5` format. 