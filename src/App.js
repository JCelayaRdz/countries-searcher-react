import { useEffect, useState } from "react"
import { Modal } from './components/Modal'
import { CardsContainer } from './components/CardsContainer'
import { FormContainer } from "./components/FormContainer"
import { Header } from "./components/Header"
import { ThemeProvider } from "styled-components"

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [countryToSearch, setCountryToSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalCountry, setModalCountry] = useState({})
  const [mode, setMode] = useState('dark')
  const apiUrl = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setCountries([...data])
        setCountriesToShow([...data])
      })
  }, [])

  const handleOnSubmit = event => {
    event.preventDefault()
    const filteredCountries = countries.filter(c => {
      const currentCountryName = c.name.toLowerCase()
      const toSearch = countryToSearch.toLowerCase()
      return currentCountryName.includes(toSearch) 
    })
    setCountryToSearch('')
    setCountriesToShow(filteredCountries)
  }
  
  const handleOnChange = event => setCountryToSearch(event.target.value)

  const handleFilter = (event) => {
    const regionToShow = event.target.innerHTML
    setCountriesToShow(countries.filter(c => c.region === regionToShow))
  }

  const handleShowModal = e => {
    const card = e.target.parentNode
    const countryInfo = card.children[1]
    const countryName = countryInfo.children[0].innerHTML
    setShowModal(!showModal)
    setModalCountry(countries.find(c => c.name === countryName))
  }

  const darkTheme = {
    bg: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    body: "hsl(207, 26%, 17%)"
  }

  const lightTheme = {
    bg: "hsl(0, 0%, 100%)",
    text: "#000",
    body: "hsl(0, 0%, 98%)",
  }

  const handleToggleTheme = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
    document.body.classList.toggle('light')
  }
  

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}> 
      <Header 
        handleToggleTheme={handleToggleTheme}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalCountry={modalCountry}
      />
      <FormContainer
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        handleFilter={handleFilter}
        countryToSearch={countryToSearch}
      />
      <CardsContainer 
        countries={countriesToShow}
        handleShowModal={handleShowModal}
      />
    </ThemeProvider>
  );
}

export default App;
