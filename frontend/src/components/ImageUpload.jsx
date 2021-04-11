import React from 'react';
import uploadFile from "../ducks/ImageUpload";

const ImageUpload = () => {
    const [file, setFile] = React.useState(null);
    const [pred, setPred] = React.useState(null);
    const inputRef = React.useRef(null);

    const handleChange = React.useCallback(event => {
      setFile(event.target.files[0]);
    }, []);

    const handleUpload = React.useCallback(async () => {
      if (!!inputRef.current && file) {
        const result = await uploadFile(file);
        setPred(result);
      }
    }, [file, inputRef, setPred]);

    return (
      <div>
        {pred && <div>{pred}</div>}
        <input ref={inputRef} type="file" onChange={handleChange}/>
        <br />
        <img src={file} alt="the uploaded file" height={400} width={300} />
        <br />
        <button onClick={handleUpload}>Upload Image</button>
      </div>
    )
}

export default ImageUpload;
