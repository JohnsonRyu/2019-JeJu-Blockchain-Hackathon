import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Icon, Image, Button, Divider, Segment, GridColumn } from 'semantic-ui-react'

const GridButtonGroup = styled(GridColumn)`
  padding: 0 !important;
`
const ColoredTextButton = styled.button`
  border: 0 !important;
  outline: 0 !important;
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #5c7fff;

  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
`

const NoneColoredTextButton = styled.button`
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #586e89;

  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
`

const StyledCard = styled(Card)`
  border-radius: 12px;
  border: solid 1px rgba(46, 91, 255, 0.08);
  background-color: #ffffff;
`

// This is unused CardView
const CardTwo = () => (
  <StyledCard>
    <Image
      src='https://react.semantic-ui.com/images/avatar/large/molly.png'
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
        </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Grid columns={2} celled='internally' >
        <GridButtonGroup>
          <ColoredTextButton>VISA 발급</ColoredTextButton>
        </GridButtonGroup>
        <GridButtonGroup>
          <NoneColoredTextButton>이용내역</NoneColoredTextButton>
        </GridButtonGroup>
      </Grid>
    </Card.Content>
  </StyledCard>
)

export default CardTwo;