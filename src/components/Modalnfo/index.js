import { useEffect, useState } from 'react'
import { Container, FlagImg, TextContainer, Paragraph, ListContainer, List, Button, ButtonContainer, P } from './styles'
import PropTypes from 'prop-types'

const ModalInfo = ({ country, setCountry }) => {
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
        <Container>
            <FlagImg src={country.flag}/>
            <TextContainer>
                <h2>{country.name}</h2>
                <ListContainer>
                    <List>
                        <li>
                            <Paragraph>Native name: </Paragraph>{country.nativeName}
                        </li>
                        <li>
                            <Paragraph>Population: </Paragraph> {country.population}
                        </li>
                        <li>
                            <Paragraph>Region: </Paragraph>{country.region}
                        </li>
                        <li>
                            <Paragraph>Sub region: </Paragraph> {country.subregion}
                        </li>
                        <li>
                            <Paragraph>Capital: </Paragraph> {country.capital}
                        </li>
                    </List>
                    <List>
                        <li>
                            <Paragraph>Top Level Domain: </Paragraph> {country.topLevelDomain}
                        </li>
                        <li>
                            <Paragraph>Currencies: </Paragraph> {country.currencies[0].code}
                        </li>
                        <li>
                            <Paragraph>Languages: </Paragraph> {country.languages.map(l => l.name).join(', ')}
                        </li>
                    </List>
                </ListContainer>
                { borderCountries.length > 0
                  ? <ButtonContainer>
                        <P>Border countries: </P>
                        {borderCountries.map(c =>
                            <Button
                                key={c.name}
                                onClick={() => setCountry(c)}>
                                {c.name}
                            </Button>
                        )}
                    </ButtonContainer>
                  : <></>
                }
            </TextContainer>
        </Container>
  )
}

ModalInfo.propTypes = {
  country: PropTypes.object.isRequired,
  setCountry: PropTypes.func.isRequired
}

export { ModalInfo }
