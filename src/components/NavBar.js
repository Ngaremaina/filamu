import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return(

       <Navbar bg="primary">
            <Nav className="me-auto ">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/movies" className="nav-link">Movies</NavLink>
                <NavLink to="/tv shows" className="nav-link">TV Shows</NavLink>
                <NavLink to="/new and popular" className="nav-link">New and Popular</NavLink>
                
            </Nav>           
       </Navbar>
    )
}

export default NavBar