import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div style = {{"font-family":"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
    <h1>О нас</h1>    
       <p>.....</p> 
        <Link to="/addbook">Добавить книгу </Link>
        <Link to="/">Главная</Link>
    </div>
  )
}

export default About