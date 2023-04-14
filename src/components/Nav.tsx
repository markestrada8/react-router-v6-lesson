import React from 'react'
import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="navlink">Home</Link>

      <Link to="about" className="navlink">About</Link>
    </div>
  )
}

export default Nav