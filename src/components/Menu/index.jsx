import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Menu() {
    return (
        <div className="menu">
            <nav>
                <ul className="list-menu">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Item 2</li></Link>
                    <Link to="/"><li>Item 3</li></Link>
                    <Link to="/register"><li>Register</li></Link>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;