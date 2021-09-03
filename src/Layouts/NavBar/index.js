import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "./NavBar.css"
export const NavBar = () => {
    return (
        <div className = "navbar">
            <div className = "navbar__bg">
            <Link to="/">
                <p  className ="navbar__title">
                    Github Finder
                </p>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Search">Search</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default NavBar;