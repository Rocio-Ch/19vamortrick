import { useEffect, useState } from 'react'
import axios from "axios"
import Header from "./components/Header.jsx"
import ContainCard from './components/ContainCard.jsx'
import Pagination from "./components/Pagination.jsx"


function App() {

  const [characters, setCharacters] = useState("")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  /* const [pages, setTotalPages] = useState(1) */

    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`)   
        .then(({ data }) => {
          setCharacters(data.results)
          /* setTotalPages(data.info.pages) */
        })
    }, [search, currentPage])

  return (
    <>
      <Header setSearch={setSearch} setCharacters={setCharacters} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <ContainCard characters={characters} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} /* pages={pages} */ />
    </>
  )
}

export default App;
