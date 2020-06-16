import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <NavLink to="/batteryrecords">Battery Records</NavLink>  
            <NavLink to="/users">Users</NavLink>
        </div>
    )
}

export default Header
