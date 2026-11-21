import './App.css';
import Home from './pages/Home/Home'
import Header from './layouts/Header'
import { MyContext } from './utils/MyContext';
import { Route,Routes } from "react-router";
import Coin from './pages/Home/components/Coin';
import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  
  
      useEffect(()=>{
          fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
          .then(res => res.json())
          .then(data=> setUsers(data))
      },[])
  return (
    <MyContext.Provider value={users}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/coin/:id" element={<Coin />}  />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
