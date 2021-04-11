import axios from "axios";

const BACKEND_ENDPOINT = "http://localhost:5000";

async function uploadFile(file) {
    const imageForm = new FormData();
    imageForm.append('file', file);

    axios.post(`${BACKEND_ENDPOINT}/image`, imageForm)
        .then(data => console.log(data))
        .catch(err => console.log(err));

    return "mock-prediction"
}

export default uploadFile;
