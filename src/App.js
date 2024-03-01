import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe> 
        <p>
          My goofy ahh website 😎😎

          (ayushi is gay (this is proof that its my website))
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
