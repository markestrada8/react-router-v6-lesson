import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "../pages/About"
import ClientDetail from "../pages/ClientDetail"
import Home, { Banner } from "../pages/Home"
import Nav from './Nav'



const App = () => {
  return (
    <div>

      <Nav />
      <Banner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/client/:id" element={<ClientDetail />} />
      </Routes>
    </div>
  )
}

export default App
