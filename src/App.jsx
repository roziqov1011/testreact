import { useEffect, useState } from 'react';
import './App.css';
let a = 10
function App() {
  const [, setUsers] = useState([])
  const [count, setCount] = useState(0)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((data)=> setUsers(data))
  }, [count])


  return (
    <div className="App">
      <h1>App</h1>

      <button onClick={()=> setCount(count + 1)}>++</button>
    </div>
  );
}

export default App;
