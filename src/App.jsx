import logo from "./logo.svg";
import "./App.css";
import Blog from "./Blog";

function App() {
  const payload = {
    uid: "0001",
    username: "torahack",
  };

  const isSignedIn = {
    isSignedIn:true,
  };

  console.log({ ...payload ,...isSignedIn});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Blog />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start React
        </a>
      </header>
    </div>
  );
}

export default App;
