import React from 'react'
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import { IAnimalData } from '../../constants/interface'

const StyledGrid = styled(Grid)`
  text-align: center;
  vertical-align: middle;
  height: 575px;
  max-height: 640px !important;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledGridColumn = styled(Grid.Column)`
  max-width: 450px;
`
const data = Array(2)
  .fill(1)
  .map(() => {
    return {
      animalID: "0124358321",
      name: "튼튼이",
      animalType: "리트리버",
      color: "금색",
      gender: 0,
      birth: "2019.11.5",
      adoptionDate: "2019.11.10",
      remarks: ""
    }
  })

const Main = () => (
  <StyledGrid>
    <StyledGridColumn>
      {data.map((d: IAnimalData, i: number) => (
        <CardOne itemList={d} key={i} />
      ))}
      <AddCard isAuth={true} />
    </StyledGridColumn>
  </StyledGrid>
)

export default Main;