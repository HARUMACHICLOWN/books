import React from "react";
import { AddBook, Main, About } from "./pages"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  const booksList = [
    {name:"Книга1",desc:"Описание"},
    {name:"Книга2",desc:"Описание"},
    {name:"Книга3",desc:"Описание"},
  ]

  const [ books, setBooks ] = React.useState(booksList)

  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<Main booksList={books}/>}/>
      <Route exact path="/addbook" element={<AddBook booksList={books} setBooks = {setBooks}/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
  </Router>
  
  )
}

export default App;
