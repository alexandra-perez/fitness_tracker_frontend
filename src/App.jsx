import { useState, useEffect } from 'react';
import './App.css';

const API = import.meta.env.VITE_API_URL;

function App() {
  useEffect(() => {
    fetch(`${API}/workouts`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => console.log(resJSON));
  }, []);

  return <></>;
}

export default App;
