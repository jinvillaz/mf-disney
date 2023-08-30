import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

import CharacterCard from '../../components/CardCharacter'
import { Search } from '../../components/Search'
import DisneyApi from '../../services/disney-api'
import { Character } from '../../shared/types'

import {
  Cards,
  Container,
  CurrentPage,
  IconNext,
  IconPrevious,
  PaginationContainer,
  SearchContainer,
  Title,
} from './styles'

export const Home = () => {
  const { t } = useTranslation()
  const [characters, setCharacters] = useState<Character[]>([])
  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')

  const handleSearch = (value: string) => {
    setPage(1)
    setName(value)
  }

  const getData = async () => {
    const { data, pages } = await DisneyApi.getCharacters({ page, name })
    setCharacters(data)
    setPages(pages)
  }

  const previousPage = () => {
    if (page - 1 > 0) {
      setPage((prev) => prev - 1)
    }
  }

  const nextPage = () => {
    if (page + 1 <= pages) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    getData()
  }, [page, name])

  return (
    <Container>
      <Title>Disney</Title>
      <SearchContainer>
        <Search placeholder={t('Search character')} onChange={handleSearch} />
      </SearchContainer>
      <PaginationContainer>
        <IconPrevious onClick={previousPage}>
          <MdNavigateBefore size={40} />
          {t('Previous')}
        </IconPrevious>
        <CurrentPage>{`${t('Current page')} ${page}`}</CurrentPage>
        <IconNext onClick={nextPage}>
          {t('Next')}
          <MdNavigateNext size={40} />
        </IconNext>
      </PaginationContainer>
      <Cards>
        {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </Cards>
    </Container>
  )
}

export default Home
