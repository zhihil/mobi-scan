import axios from "axios";

const BACKEND_ENDPOINT = "http://localhost:5000";

async function uploadFile(file) {
    const imageForm = new FormData();
    imageForm.append('file', file);

    const { confidence, predicted_class } = await axios.post(`${BACKEND_ENDPOINT}/image`,  imageForm, { 
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(({ data }) => data);

    return {
        confidence,
        predictedClass: predicted_class
    };
}

export default uploadFile;
