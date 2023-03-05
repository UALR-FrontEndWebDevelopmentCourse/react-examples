import './App.css';
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <Profile
                  person={{
                      name: 'Katsuko Saruhashi',
                      imageId: 'YfeOqp2'
                  }}
              />
              <Profile
                  size={80}
                  person={{
                      name: 'Aklilu Lemma',
                      imageId: 'OKS67lh'
                  }}
              />
              <Profile
                  size={50}
                  person={{
                      name: 'Lin Lanying',
                      imageId: '1bX5QH6'
                  }}
              />
          </div>
      </header>
    </div>
  );
}

export default App;
