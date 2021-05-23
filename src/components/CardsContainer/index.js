import { Card } from '../Card'
import { Container } from './styles'

export const CardsContainer = ({countries}) => {
    return(
    <Container>
        {countries.map(country => (
            <Card
                key={country.name}
                country={country}
            />
        ))}
    </Container>
    )
}