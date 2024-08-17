import styled from 'styled-components'

export const Item = styled.li`
  list-style: none;
  width: 30%;
  margin: 5px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 20px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 150px;
`
export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RemoveBtn = styled.button`
  color: #ffffff;
  padding: 5px;
  outline: none;
  cursor: pointer;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  border: 0px;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
  background-color: transparent;
`
export const CountryName = styled.p`
  color: #f8fafc;
  font-size: medium;
  font-weight: 400;
  font-family: 'Roboto';
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
