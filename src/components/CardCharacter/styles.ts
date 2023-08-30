import styled from 'styled-components'

export const Container = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  margin: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 6px -6px #777;
  background-color: white;
  cursor: pointer;
`

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`

export const InfoName = styled.div`
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const InfoGender = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const InfoSpecie = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const InfoStatus = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
