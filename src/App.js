import './App.css';
import Toolbar from "./Components/Toolbar";

function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

export default App;
