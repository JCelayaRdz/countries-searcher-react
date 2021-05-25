import { InfoContainer, CountryImg, CountryInfo, TextInfo, List, Button, P, ButtonContainer } from './styles'

export const ModalInfo = ({country}) => {

    return(
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
                    Border countries: 
                    { country.borders.length > 0 ? 
                        <div>
                            {country.borders.map(c => <Button key={c}>{c}</Button>)}
                        </div>
                        :
                        <P>No border countries</P>
                    }
                </ButtonContainer>
            </CountryInfo>
        </InfoContainer>
    )
}