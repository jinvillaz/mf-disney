import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  box-shadow: 0 10px 6px -6px #777;
`

export const SearchInput = styled.input`
  padding: 0.75rem 2.2rem;
  border-radius: 0.5rem;
  border: 0;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  width: 100%;
  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
  }
`

export const IconLeft = styled.div`
  position: absolute;
  left: 0.75rem;
`

export const IconRight = styled.div`
  position: absolute;
  right: 0.75rem;
`
