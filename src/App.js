import { useEffect, useState } from "react"
import { CardsContainer } from './components/CardsContainer'
import { FormContainer } from "./components/FormContainer"
import { Header } from "./components/Header"

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [countryToSearch, setCountryToSearch] = useState('')
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

  return (
    <> 
      <Header />
      <FormContainer
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        countryToSearch={countryToSearch}
      />
      <CardsContainer 
        countries={countriesToShow}
      />
    </>
  );
}

export default App;
