import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>KotaKita</h1>
                <ul>
                    <li><Link to='/'>Visited City</Link></li>
                    <li><Link to='/addcity'>Add Visited City</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar