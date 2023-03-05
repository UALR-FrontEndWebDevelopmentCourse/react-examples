import logo from './logo.svg';
import './App.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Welcome name="Ivan Rodriguez-Conde" />
          <Welcome name="Tinker Hatfield" />
          <Welcome name="Dieter Rams" />
          <Welcome name="Shawn Carter" />
      </header>
    </div>
  );
}

export default App;
