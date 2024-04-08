import { useEffect, useState } from 'react'
import axios from "axios"
import Header from "./components/Header.jsx"
import ContainCard from './components/ContainCard.jsx'


function App() {

  const [characters, setCharacters] = useState([])
  const [status, setStatus] = useState("")
 
    useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${status && `?status=${status}`}`)   
        .then(({ data }) => {
          setCharacters(data.results)
        })
        .catch((error) => console.log(error))
    }, [status])

  return (
    <>
      <Header setStatus={setStatus} />
      <ContainCard characters={characters} />
    </>
  )
}

export default App;
