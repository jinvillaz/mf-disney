import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1300px;
  margin-bottom: 20px;
  font-size: 3rem;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 60%;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin-bottom: 40px;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  width: 60%;
  position: relative;
  font-size: 30px;
`

export const IconPrevious = styled.div`
  position: absolute;
  left: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const IconNext = styled.div`
  position: absolute;
  right: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
