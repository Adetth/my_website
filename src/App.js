import logo from './logo.svg';
import './App.css';

function App() {
  let wid = Math.floor(window.innerWidth * (80/100));
  let hgt = Math.floor(window.innerHeight * (80/100));

  console.log(wid,hgt);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <iframe width={wid} height={hgt}
        src="https://www.youtube.com/embed/RQmEERvqq70">
        </iframe> 
        <p>
          My goofy ahh website 😎😎

          {/* (ayushi is gay (this is proof that its my website)) */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
