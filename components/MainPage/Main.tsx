import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Icon, Image, Button, Divider, Segment, GridColumn } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import UserHeader from "../UserHeader/UserHeader"
import NavTopHeader from "../Common/NavTopHeader"

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


  /* height: 150vh !important; */
`
// <Card.Group> 으로 카드 그룹 묶으면 가운데 정렬되지 않음
const Main = () => (
  <StyledGrid>
    <StyledGridColumn>
      <CardOne />
      <CardOne />
      <AddCard isAuth={true} />
    </StyledGridColumn>
  </StyledGrid>
)

export default Main;