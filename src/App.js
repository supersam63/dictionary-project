import logo from "./dictionarylogo.avif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/supersam63/dictionary-project"
            target="_blank"
            rel="noreferrer">
            Open-source code
          </a>
          , by{" "}
          <a
            href="https://samantha-portfolio-e9d0c1.netlify.app"
            target="_blank"
            rel="noreferrer">
            Samantha Vellinga
          </a>
        </footer>
      </div>
    </div>
  );
}
