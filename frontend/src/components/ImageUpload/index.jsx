import React from 'react';
import uploadFile from "../../ducks/uploadFile";
import { Button } from '../Button';
import { ColumnFlex, RowFlex } from '../Flex';
import { Image } from './components';

const ImageUpload = ({ onFileChange }) => {
    const [file, setFile] = React.useState(null);
    const [banner, setBanner] = React.useState(null);
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
        setBanner('waiting for response...');

        try {
          const { confidence, predictedClass } = await uploadFile(file);
          const roundedConf = Math.round(confidence * 100) / 100;
          setBanner(`The predicted class was "${predictedClass}" with confidence ${roundedConf}%`);
        } catch (err) {
          console.err(err);
          setBanner("Error: Something went wrong with the prediction");
        }
      }
    }, [file, inputRef, setBanner]);

    const onClearClick = React.useCallback(() => {
      setBanner('');
      setFile(null);
      onFileChange(null);
      if (inputRef.current) inputRef.current.value = '';
    }, [setFile, onFileChange]);

    return (
      <ColumnFlex>
        {banner && <div>{banner}</div>}
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
