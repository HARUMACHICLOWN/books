import React from 'react'
import { Link } from 'react-router-dom'

function AddBook({ booksList, setBooks }) {
  
  const [ value, setValue ] = React.useState("")
  const [ value1, setValue1 ] = React.useState("")  


  const letBook = () => {
    let book = {
      name:value, desc:value1
    }
    setBooks([...booksList,book])
  }
    
  console.log(booksList)

    return(
    <div style = {{"font-family":"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
      <label>Введите название книги:
      <br></br><input value={value} onChange={event => setValue(event.target.value)}></input>
      </label><br></br>
      <label>Введите описание книги:
      <br></br><textarea cols="30" rows="10" value={value1} onChange={event => setValue1(event.target.value)}></textarea>
      </label><br></br>
      <button onClick={letBook}>Опубликовать</button><br></br>
      <nav>
      <Link to="/">Главная </Link> 
      <Link to="/about"> О нас</Link>
      </nav>
      </div>
      )
    }

export default AddBook