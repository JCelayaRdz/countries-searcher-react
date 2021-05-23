import { CardContainer, Img, P, Span, Title, Info} from "./styles";

export const Card = ({country}) => (
    <CardContainer>
        <Img src={country.flag}/>
        <Info>
            <Title>{country.name}</Title>
            <P> Population: 
                <Span>{country.population}</Span>
            </P>
            <P> Region: 
                <Span>{country.region}</Span>
            </P>
            <P> Capital: 
                <Span>{country.capital}</Span>
            </P>
        </Info>
    </CardContainer>
)