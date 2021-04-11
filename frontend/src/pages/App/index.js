import logo from '../../assets/logo.svg';
import './index.css';
import ImageUpload from "../../components/ImageUpload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageUpload />
      </header>
    </div>
  );
}

export default App;
