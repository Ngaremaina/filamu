import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";

const NavBar = () => {
    return(

       <Navbar bg="dark" sticky="top">
            <Nav>       
                <NavLink to="/" className="nav-link">Filamu</NavLink>
            </Nav>   
            <Nav className="m-auto">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/movies" className="nav-link">Movies</NavLink>
                <NavLink to="/tv shows" className="nav-link">TV Shows</NavLink>
                <NavLink to="/new and popular" className="nav-link">New and Popular</NavLink>  
            </Nav>
            <Nav>
                <NavLink to="/login" className="nav-link">Login</NavLink> 
                <NavLink to="/signup" className="nav-link">Signup</NavLink>
            </Nav>          
       </Navbar>
    )
}

export default NavBar