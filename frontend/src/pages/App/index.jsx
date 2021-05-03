import React from "react";
import { ColumnFlex } from "../../components/Flex";
import ImageUpload from "../../components/ImageUpload";
import { Container, Background } from "./components";

function App() {
  // The `hasFile` var is used in `Container` to adjust the styling to accomodate
  // the uploaded image.
  const [hasFile, setHasFile] = React.useState(false);

  const onFileChange = React.useCallback((file) => {
    setHasFile(!!file);
  }, []);

  return (
    <Background>
      <ColumnFlex>
        <Container hasFile={hasFile} >
          <ImageUpload onFileChange={onFileChange} />
        </Container>
      </ColumnFlex>
    </Background>
  )
}

export default App;
