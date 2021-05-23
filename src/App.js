import { useEffect, useState } from "react"
import { CardsContainer } from './components/CardsContainer'
import { FormContainer } from "./components/FormContainer"
import { Header } from "./components/Header"

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const apiUrl = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setCountries([...data])
        setCountriesToShow([...data])
      })
  }, [])

  console.log(countries)

  return (
    <> 
      <Header />
      <FormContainer />
      <CardsContainer 
        countries={countriesToShow}
      />
    </>
  );
}

export default App;
