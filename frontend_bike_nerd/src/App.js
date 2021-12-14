import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Outlet, Link, Route, Routes } from 'react-router-dom'
import Parts from './Components/Parts';
import Frames from './Components/Frames';
import Builds from './Components/Builds';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <div>
        <nav>
          <Link to="/login"> login </Link>
          <Link to="/"> home </Link>
          <Link to="/frames"> my frames </Link>
          <Link to="/parts"> my parts </Link>
          <Link to="/builds"> my builds </Link>
        </nav>
        <Outlet/>
      <h1>Page Count: {count}</h1>
      </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="frames" element={<Frames />}/>
            <Route path="parts" element={<Parts />}/>
            <Route path="builds" element={<Builds />}/>
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<p>Whoops, there's nothing here!</p>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
