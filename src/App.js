import logo from './logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import PostData from './components/Post';
import './App.css';
import View from './components/View';
import Switcher from './components/Switcher';

function App() {

  const [advices, setAdvice] = useState("");

//   useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/todos/")
//         .then(res => {
//             console.log(res)
//             setAdvice(res.data)
//         })
//         .catch(err => {console.log(err)})
//   }, [1]);
  return (
    
      <div className='App'>
            <Switcher />
      </div>
  );
};

export default App;
