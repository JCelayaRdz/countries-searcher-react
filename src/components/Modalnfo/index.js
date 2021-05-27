import { useEffect, useState } from 'react'
import { InfoContainer, CountryImg, CountryInfo, TextInfo, List, Button, ButtonContainer } from './styles'

export const ModalInfo = ({ country, setCountry }) => {
  const [borderCountries, setBorderCountries] = useState([])

  useEffect(() => {
    Promise.all(
      country.borders.map(countryCode =>
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
          .then(res => res.json())
          .then(data => data)
      ))
      .then(countries => setBorderCountries([...countries]))
  }, [country])

  return (
        <InfoContainer>
            <CountryImg src={country.flag}/>
            <CountryInfo>
                <h2>{country.name}</h2>
                <TextInfo>
                    <List>
                        <li>Native name: {country.nativeName}</li>
                        <li>Population: {country.population}</li>
                        <li>Region: {country.region}</li>
                        <li>Sub Region: {country.subregion}</li>
                        <li>Capital: {country.capital}</li>
                    </List>
                    <List>
                        <li>Top Level Domain: {country.topLevelDomain}</li>
                        <li>Currencies: {country.currencies[0].code}</li>
                        <li>Languages: {country.languages.map(l => l.name).join(' ')}</li>
                    </List>
                </TextInfo>
                <ButtonContainer>
                    {borderCountries.length > 0
                      ? <>
                            <span>Border countries:</span>
                            {borderCountries.map(c =>
                                <Button onClick={() => setCountry(c)}>
                                    {c.name}
                                </Button>)
                            }
                        </>
                      : <></>
                    }
                </ButtonContainer>
            </CountryInfo>
        </InfoContainer>
  )
}
