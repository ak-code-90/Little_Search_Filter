import { useState } from 'react';
import './App.css';
import JSONDATA from '../MOCK_DATA.json';
import icon from './assets/icons8-mouse-91.png';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <div className="searchWrapper">
        <h1>Entrez les premières lettres d'un prénom</h1>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          className="input"
          placeholder="prénom"
          type="text"
        />
      </div>
      <img className="icon" width="50px" src={icon} alt="souris d'ordinateur" />
      <div className="dataWrapper">
        {JSONDATA.filter((e) => {
          //if user hasn't write anything, display every first_name
          if (searchTerm === '') {
            return e;
          } else if (
            //else if user has write something, filter the array and display first_names that include what the user has write
            e.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return e;
          }
        }).map((e, key) => {
          return (
            <div className="user" key={key}>
              <p>{e.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
