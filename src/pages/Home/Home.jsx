import './Home.css'
import { useState, useContext } from "react"
import { MyContext } from "../../utils/MyContext"
import Coin from './components/Coin'
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";




function Home() {
    const users = useContext(MyContext)
 

    // Filter coin-------------------
   const [sort, setSort] = useState("All")
   function sortCoins(){
    return [...users].sort((a,b)=>{
        if (sort === "Highest") {
            return b.current_price - a.current_price 
        }
        if(sort === "Lowest" ){
            return a.current_price - b.current_price
        }
        if(sort === "MarketCap"){
            return b.market_cap - a.market_cap
        }
    })
   }


        // Search Coin------------------
   const [search, setSearch] = useState("");
   function SearchCoin() {
    return sortCoins().filter((item)=>{
      return item.name.toLocaleLowerCase() && item.symbol.includes(search)
     
    })
   }
    

  return (
    <div>
        <div className='containerSearch'>
            <input type="text"  onChange={(e)=>setSearch(e.target.value)}  value={search} placeholder='Search cryptocurrency ...'/>
            <select name="" id="" onChange={(e)=>setSort(e.target.value)}  value={sort} >
                <option value="Highest">Highest price</option>
                <option value="Lowest"> Lowest price</option>
                <option value="MarketCap">Highest market cap</option>
            </select>
        </div>
        

        <div className='container'>
            {SearchCoin().slice(0,20).map(user =>{
                return(
                    <div key={user.id} className="containerCoins">
                        <p> {user.market_cap_rank} </p>
                        <div className='containerName'>
                           <h3>{user.name}</h3>
                           <p> {user.symbol} </p>
                        </div>
                        
                        <p> {user.current_price} USD </p>
                        <p className= {user.price_change_percentage_24h > 0 ? "green" : "red"}> {user.price_change_percentage_24h} </p>
                        <button className='detailBtn'>
                        <Link to={`/coin/${user.id}`} key={user.id}>
                        <FaChevronRight /> 
                        </Link>
                        </button>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Home