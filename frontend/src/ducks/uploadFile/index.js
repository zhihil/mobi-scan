import axios from "axios";

// Ideally should be in a `.env.prod` file in production, but we'll keep it here 
// for simplicty.
const BACKEND_ENDPOINT = "http://localhost:5000";

/**
 * Side-effect posts the provided image `file` to the Flask backend for classification
 * @param {*} file The file that should be classified by the convnet
 * @returns {{ confidence: number: predictedClass: string }} The prediction object
 */
async function uploadFile(file) {
    // Construct an HTTP form to transmit the image `file`
    const imageForm = new FormData();
    imageForm.append('file', file);

    // Post to our Flask backend
    const { confidence, predicted_class } = await axios.post(`${BACKEND_ENDPOINT}/image`,  imageForm, { 
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(({ data }) => data);

    // Return the convnet's prediction about the image's flower class and its
    // confidence in the result
    return {
        confidence,
        predictedClass: predicted_class
    };
}

export default uploadFile;
