import { CardContainer, Img, P, Span, Title, Info } from './styles'
import PropTypes from 'prop-types'

const Card = ({ country, handleShowModal }) => (
    <CardContainer onClick={handleShowModal}>
        <Img src={country.flag} alt={`${country.flag} flag`}/>
        <Info>
            <Title>{country.name}</Title>
            <P> Population:
                <Span> {country.population}</Span>
            </P>
            <P> Region:
                <Span> {country.region}</Span>
            </P>
            <P> Capital:
                <Span> {country.capital}</Span>
            </P>
        </Info>
    </CardContainer>
)

Card.propTypes = {
  country: PropTypes.object.isRequired,
  handleShowModal: PropTypes.func.isRequired
}

export { Card }
