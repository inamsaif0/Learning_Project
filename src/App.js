import logo from './logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import './App.css';


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
            <Todo />
      </div>
  );
};

export default App;
