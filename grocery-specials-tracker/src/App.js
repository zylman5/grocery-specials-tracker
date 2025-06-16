import React, { useState } from 'react';
import Papa from 'papaparse';
import './App.css';

const mockSpecials = [
  { name: 'Weet-Bix 1.2kg', store: 'Coles', price: '$3.50' },
  { name: 'Milk 2L', store: 'Woolworths', price: '$2.00' },
];

function App() {
  const [items, setItems] = useState([]);
  const [matches, setMatches] = useState([]);

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (results) => {
        const cleaned = results.data.flat().filter(Boolean);
        setItems(cleaned);
        findMatches(cleaned);
      },
    });
  };

  const findMatches = (list) => {
    const found = mockSpecials.filter((special) =>
      list.some((item) =>
        item.toLowerCase().includes(special.name.toLowerCase().split(' ')[0])
      )
    );
    setMatches(found);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery Specials Tracker</h1>
        <input type="file" accept=".csv" onChange={handleCSVUpload} />
        {items.length > 0 && (
          <div>
            <h2>Your List</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {matches.length > 0 && (
          <div>
            <h2>Items on Special 🎉</h2>
            <ul>
              {matches.map((match, index) => (
                <li key={index}>
                  {match.name} - {match.store} - {match.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;