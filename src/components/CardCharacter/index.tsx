import { Character } from '../../shared/types'

import { Avatar, Card, Container, Info, InfoName } from './styles'

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Container>
      <Card>
        <Avatar src={character.imageUrl} alt="Disney" />
        <Info>
          <InfoName>{character.name}</InfoName>
        </Info>
      </Card>
    </Container>
  )
}

export default CharacterCard
