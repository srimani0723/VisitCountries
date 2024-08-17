import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  padding-top: 3%;
  background-color: #161624;
  height: 100vh;
`
export const AddedList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  overflow-y: auto;
  height: 40%;
`

export const Para = styled.p`
  color: #f1f5f9;
  font-size: large;
  font-weight: 400;
  font-family: 'Roboto';
`
export const Para2 = styled.p`
  color: #cbd5e1;
  font-size: medium;
  font-weight: 400;
  font-family: 'Roboto';
  margin: 0px;
  margin-right: 40px;
`

export const EmptyView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-color: #1f1f2f;
  border-radius: 5px;
  border: 1px solid #334155;
  overflow-y: auto;
  height: 40%;
`
export const Item = styled.li`
  list-style: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #334155;
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
export const VisitBtn = styled.button`
  color: #ffffff;
  padding: 6px;
  width: 90px;
  outline: none;
  cursor: pointer;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 20px;
  border: 0px;
  border-radius: 5px;
  background-color: #3b82f6;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: x-large;
  font-weight: 400;
  font-family: 'Roboto';
  margin: 0px;
`
