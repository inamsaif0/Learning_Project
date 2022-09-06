import logo from './logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import './App.css';


function App() {

  const [advice, setAdvice] = useState("");
  const [error, seterror] = useState();

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(res => setAdvice(res.slice(0,10)))
        .catch(err => seterror(err))
  }, []);
  return (
    
      <div className='App'>
        {advice.length > 0 ? advice.map((todo) => {
          return <Todo />;
        }) : ('Loading...')}
      </div>
  );
};

export default App;
