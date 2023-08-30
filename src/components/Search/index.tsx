import { useState } from 'react'
import { MdClear, MdSearch } from 'react-icons/md'

import { Container, IconLeft, IconRight, SearchInput } from './styles'

interface SearchProps {
  placeholder?: string
  onChange: (value: string) => void
}

export const Search: React.FC<SearchProps> = ({ onChange, placeholder }) => {
  const [value, setValue] = useState<string>('')
  const [refTimeout, setRefTimeout] = useState<ReturnType<typeof setTimeout>>()

  const onTextChange = (text: string) => {
    setValue(text)
    clearTimeout(refTimeout)
    setRefTimeout(
      setTimeout(() => {
        onChange(text)
      }, 1000),
    )
  }

  return (
    <Container>
      <IconLeft>
        <MdSearch size={20} />
      </IconLeft>
      <SearchInput
        placeholder={placeholder || 'Search'}
        value={value}
        onChange={(e) => onTextChange(e.currentTarget.value)}
      />
      {value.length > 0 && (
        <IconRight onClick={() => onTextChange('')} data-testid="clear-icon">
          <MdClear size={20} />
        </IconRight>
      )}
    </Container>
  )
}
