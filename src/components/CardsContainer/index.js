import { Card } from '../Card'
import { Container } from './styles'
import PropTypes from 'prop-types'

const CardsContainer = ({ countries, handleShowModal }) => {
  return (
    <Container>
        {countries.map(country => (
            <Card
                key={country.name}
                country={country}
                handleShowModal={handleShowModal}
            />
        ))}
    </Container>
  )
}

CardsContainer.propTypes = {
  countries: PropTypes.array.isRequired,
  handleShowModal: PropTypes.func.isRequired
}

export { CardsContainer }
