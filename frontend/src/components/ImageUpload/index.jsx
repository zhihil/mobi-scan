import React from 'react';
import uploadFile from "../../ducks/uploadFile";
import { Button } from '../Button';
import { ColumnFlex, RowFlex } from '../Flex';
import { Image } from './components';

const ImageUpload = ({ onFileChange }) => {
    const [file, setFile] = React.useState(null);
    const [pred, setPred] = React.useState(null);
    const inputRef = React.useRef(null);

    const fileReader = React.useMemo(() => {
      const reader = new FileReader();
      reader.addEventListener('load', function () {
        setFile(this.result);
      });
      return reader;
    }, []);

    const handleChange = React.useCallback(event => {
      const newFile = event.target.files[0];
      onFileChange(newFile);
      fileReader.readAsDataURL(newFile);
    }, [fileReader, onFileChange]);

    const onPredictClick = React.useCallback(async () => {
      if (!!inputRef.current && file) {
        const result = await uploadFile(file);
        setPred(result);
      }
    }, [file, inputRef, setPred]);

    const onClearClick = React.useCallback(() => {
      setFile(null);
      onFileChange(null);
    }, [setFile, onFileChange]);

    return (
      <ColumnFlex>
        {pred && <div>{pred}</div>}
        <input ref={inputRef} type="file" onChange={handleChange}/>
        {file && <Image src={file} alt="the uploaded file" height={400} width={300} />}
        <div>
          <RowFlex>
            <Button onClick={onPredictClick}>Predict</Button>
            <Button onClick={onClearClick}>Clear Image</Button>
          </RowFlex>
        </div>
      </ColumnFlex>
    )
}

export default ImageUpload;
