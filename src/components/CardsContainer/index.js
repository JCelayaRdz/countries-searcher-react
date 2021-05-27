import { Card } from '../Card'
import { Container } from './styles'

export const CardsContainer = ({ countries, handleShowModal }) => {
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
