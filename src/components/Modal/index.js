import { P, Span } from "../Card/styles"
import { ModalBtn, 
    ModalContainer, 
    Icon,
    InfoContainer,
    CountryImg,
    TitleContainer,
    CountryInfo,
    Title,
    BordersContainer,
    BorderBtn} from "./styles"

export const Modal = ({showModal, setShowModal, modalCountry}) => (
    showModal ? 
    <ModalContainer showModal={showModal}>
                <ModalBtn onClick={() => setShowModal(false)}>
                    <Icon className="fas fa-long-arrow-alt-left" />
                    Back
                </ModalBtn>
                <InfoContainer>
                    <CountryImg src={modalCountry.flag}/>
                    <TitleContainer>
                        <Title>{modalCountry.name}</Title>
                        <CountryInfo>
                            <div>
                                <P>Native: <Span>{modalCountry.nativeName}</Span></P>
                                <P>Population: <Span>{modalCountry.population}</Span></P>
                                <P>Region: <Span>{modalCountry.region}</Span></P>
                                <P>Subregion: <Span>{modalCountry.subregion}</Span></P>
                                <P>Capital: <Span>{modalCountry.capital}</Span></P>
                            </div>
                            <div>
                                <P>Top level domain: <Span>{modalCountry.topLevelDomain}</Span></P>
                                <P>Currencies: <Span>{modalCountry.currencies[0].code}</Span></P>
                                <P>Languages: <Span>{modalCountry.languages.map(l => l.name)}</Span></P>
                            </div>
                        </CountryInfo>
                        {modalCountry.borders ?
                            <BordersContainer>
                                    Border countries:
                                    {modalCountry.borders.map(c => 
                                        <BorderBtn>
                                            {c}
                                        </BorderBtn>
                                    )}
                            </BordersContainer> 
                         : <div></div>
                        }
                    </TitleContainer>
                </InfoContainer>
            </ModalContainer>
    :
    <div></div>
)