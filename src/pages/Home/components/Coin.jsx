import { useContext } from "react"
import { MyContext } from "../../../utils/MyContext"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import './Coin.css'


function Coin() {
    const users = useContext(MyContext)
    const {id} = useParams()
    const coin = users.find((item) => item.id === id);
  return (
    <div className="coinsContainer">
        <p>Price: {coin.current_price}</p>
        <p>Market Cap: {coin.market_cap_rank}</p>
        <p>Volume: {coin.total_volume}</p>
        <p>24h change: {coin.price_change_percentage_24h}</p>
    </div>
  )
}

export default Coin