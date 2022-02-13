import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import User from './component/User';

function App() {
  const [render, setRender] = useState(true);
  return (
    <div className="App">
      <h2>Is Familiar: {render.toString()}</h2>
      <button onClick={()=>setRender(!render)}>Click Me</button>
      <User render = {render}></User>
    </div>
  );
}

export default App;
