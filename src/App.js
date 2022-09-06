import logo from './logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import './App.css';


function App() {

  const [advice, setAdvice] = useState("");

  useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(res => {
            console.log(res)
            setAdvice(res.data)
        })
        .catch(err => {console.log(err)})
  }, []);
  return (
    
      <div className='App'>
        <ul>
            {advice.map(ad => (<li key={ad.id}>{ad.title}</li>))}
        </ul>
      </div>
  );
};

export default App;
