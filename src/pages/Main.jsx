import React from 'react'
import { Link } from 'react-router-dom'

function Main(booksList) {
    return (
    <div style = {{"font-family":"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
        <h1>Книги</h1>
    {
        booksList.booksList.map((item,index) => (
          <div key = {index}>
            <p>{item.name}</p>
            <p>{item.desc}</p><hr></hr>
          </div>
          ))
      } 
      <nav>
        <Link to="/addbook">Добавить книгу </Link>
        <Link to="/about">О нас</Link>
    </nav>
      
    </div>
  )
}

export default Main