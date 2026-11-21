import './Header.css'
import { FaBitcoin } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";


function Header() {
  return (
    <header>
        <div className='containerLogo'>
            <FaBitcoin />
            <h3>Crypto<span>View</span> </h3>
            

        </div>

        <nav>
            <a href="">Home</a>
            <a href="">About</a>
        </nav>

        
        <button className='refreshBtn'>
            <IoMdRefresh />
              Refresh
         </button>
            
        
    </header>
  )
}

export default Header