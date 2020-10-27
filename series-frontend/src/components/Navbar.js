import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <div className="dropdown">
                <button className="dropbtn">
                    <Link to='series'>Series</Link>
                </button>
                <div className="dropdown-content">
                    <Link to="/series/finished">Finished</Link>
                    <Link to="/series/watching">Watching</Link>
                    <Link to="/series/wishlist">Wishlist</Link>
                </div>
            </div>
        </div>   
    )
}

export default Navbar