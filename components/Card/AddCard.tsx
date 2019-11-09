import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Icon, Image, Button, Divider, Segment, GridColumn } from 'semantic-ui-react'
import CardMeta from './CardMeta';
import AddCardHeader from './AddCardHeader';
import Link from 'next/link'

interface ICardOneProps {
  children?: JSX.Element | JSX.Element[];
  text?: string;
  className?: string;
  backText?: string;
}


const StyledCard = styled(Card)`
  -webkit-tap-highlight-color: transparent; 
  height: 100px !important;
  border-radius: 12px !important;
  box-shadow: 3px 3px 12px 0 rgba(46, 91, 255, 0.07) !important;
  border: solid 1px rgba(46, 91, 255, 0.08) !important;
  background-color: #e3edf9 !important;
`

const CenterCardContent = styled(Card.Content)`
  text-align: center;
  display:flex !important;
  align-items:center !important;
  display:flex; 
  flex-direction:column;
  justify-content:center;
`

const AddCard = () => (
  <StyledCard>
    <Link href="/RegisterPage">
      <CenterCardContent>
        <AddCardHeader title="반려견 등록하기" />
      </CenterCardContent>
    </Link>
  </StyledCard >
)

export default AddCard;