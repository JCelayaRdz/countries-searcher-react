import { useEffect, useState } from 'react'
import { InfoContainer, CountryImg, CountryInfo, TextInfo, List, Button, ButtonContainer,P } from './styles'

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
                        <li>
                            <P>Native name: </P> 
                            {country.nativeName}
                        </li>
                        <li>
                            <P>Population: </P>
                            {country.population}
                        </li>
                        <li>
                            <P>Region: </P> 
                            {country.region}
                        </li>
                        <li>
                            <P>Subregion: </P>
                            {country.subregion}
                        </li>
                        <li>
                            <P>Capital: </P>
                            {country.capital}
                        </li>
                    </List>
                    <List>
                        <li>
                            <P>Top Level Domain: </P> 
                            {country.topLevelDomain}
                        </li>
                        <li>
                            <P>Currencies: </P>
                            {country.currencies[0].code}
                        </li>
                        <li>
                            <P>Languages: </P>
                            {country.languages.map(l => l.name).join(', ')}
                        </li>
                    </List>
                </TextInfo>
                <ButtonContainer>
                    {borderCountries.length > 0
                      ? <>
                            <P>Border countries:</P>
                            {borderCountries.map(c =>
                                <Button 
                                    key={c.name} 
                                    onClick={() => setCountry(c)}>
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
