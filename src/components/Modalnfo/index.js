import { P, Span } from "../Card/styles"
import { InfoContainer, CountryImg, TitleContainer, Title, CountryInfo, BordersContainer, BorderBtn } from './styles'

export const ModalInfo = ({country}) => {
    return(
        <InfoContainer>
        <CountryImg src={country.flag}/>
        <TitleContainer>
            <Title>{country.name}</Title>
            <CountryInfo>
                <div>
                    <P>Native: <Span>{country.nativeName}</Span></P>
                    <P>Population: <Span>{country.population}</Span></P>
                    <P>Region: <Span>{country.region}</Span></P>
                    <P>Subregion: <Span>{country.subregion}</Span></P>
                    <P>Capital: <Span>{country.capital}</Span></P>
                </div>
                <div>
                    <P>Top level domain: <Span>{country.topLevelDomain}</Span></P>
                    <P>Currencies: <Span>{country.currencies[0].code}</Span></P>
                    <P>Languages: <Span>{country.languages.map(l => <span>{l.name} </span>)}</Span></P>
                </div>
            </CountryInfo>
            {country.borders ?
                <BordersContainer>
                        Border countries:
                        {country.borders.map(c => 
                            <BorderBtn key={c}>
                                {c}
                            </BorderBtn>
                        )}
                </BordersContainer>
             : <div></div>
            }
        </TitleContainer>
    </InfoContainer>
    )
}