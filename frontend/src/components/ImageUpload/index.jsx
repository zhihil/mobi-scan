import React from 'react';
import uploadFile from "../../ducks/uploadFile";
import { Button } from '../Button';
import { ColumnFlex, RowFlex } from '../Flex';
import { Image, ButtonContainer } from './components';

const ImageUpload = ({ onFileChange }) => {
    const [file, setFile] = React.useState(null);       // contains the uploaded file
    const [banner, setBanner] = React.useState(null);   // used to display 'loading...', 'predicted "sunflower"', etc
    const inputRef = React.useRef(null);                // reference to image upload input

    /**
     * Used to parse an uploaded file.
     */
    const fileReader = React.useMemo(() => {
      const reader = new FileReader();

      // When file parsing is complete, then set `file` to the parsed file
      reader.addEventListener('load', function () {
        setFile(this.result);
      });

      return reader;
    }, []);

    /**
     * Called when a file is uploaded. Extracts the file from the image input element
     * and parses it using the `FileReader`
     */
    const handleChange = React.useCallback(event => {
      const newFile = event.target.files[0];          
      onFileChange(newFile);                            // fire a `fileChange` event
      fileReader.readAsDataURL(newFile);
    }, [fileReader, onFileChange]);

    /**
     * Called when the Predict button is clicked. Triggers the file upload process and
     * subsequently displays the predicted class.
     */
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

    /**
     * Called when the Clear Image button is clicked. Resets the client state.
     */
    const onClearClick = React.useCallback(() => {
      setBanner('');
      setFile(null);
      onFileChange(null);
      if (inputRef.current) inputRef.current.value = '';  // removes the image from the HTML input
    }, [setFile, onFileChange]);

    return (
      <ColumnFlex>
        {banner && <div>{banner}</div>}
        <input ref={inputRef} type="file" onChange={handleChange}/>
        {file && <Image src={file} alt="the uploaded file" height={400} width={300} />}
        <ButtonContainer >
          <RowFlex justifyContent="space-around" >
            <Button onClick={onPredictClick}>Predict</Button>
            <Button onClick={onClearClick}>Clear Image</Button>
          </RowFlex>
        </ButtonContainer>
      </ColumnFlex>
    )
}

export default ImageUpload;
