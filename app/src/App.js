import { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    fetch('./products_after_30_days.txt')
      .then((file) => file.text())
      .then((text) => {
        console.log(
          text
            .split('Day')
            .filter((str) => str !== '')
            .map((str) => str.split('\n'))
        );
      });
  });

  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo left">Car Insurance App</span>
        </div>
      </nav>

      <div className="container"></div>

      <footer className="page-footer">
        <div className="container">© 2021 Ezequiel Portela</div>
      </footer>
    </div>
  );
};

export default App;
