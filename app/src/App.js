import { useState, useEffect } from 'react';
import './App.css';
import csv from 'csvtojson';

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (productList.length === 0) {
        const file = await fetch('./products_after_30_days.txt');
        const text = await file.text();

        const list = await Promise.all(
          text
            .split('Day')
            .filter((str) => str !== '')
            .map(async (str) => {
              const lines = str.split('\n').reverse();
              const day = lines.pop().trim();

              const products = await csv({ trim: true }).fromString(
                lines.reverse().join('\n')
              );

              return { day, products };
            })
        );

        setProductList(list);
      }
    };

    fetchData();
  });

  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo left">Car Insurance App</span>
        </div>
      </nav>

      <div className="container">
        {productList.map((productList) => {
          <>
            <h1>Día {productList.day}</h1>
          </>;
        })}
      </div>

      <footer className="page-footer">
        <div className="container">© 2021 Ezequiel Portela</div>
      </footer>
    </div>
  );
};

export default App;
