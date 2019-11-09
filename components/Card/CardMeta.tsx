import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Icon, Image, Button, Divider, Segment, GridColumn } from 'semantic-ui-react'

const SubTitle = styled.span`
  color: #586e89;
  font-size: 10px;
  font-weight: 600;
  margin-right: 1em !important;
`

const SubText = styled.span`
  color: #586e89;
  font-size: 10px;
  font-weight: 300;
`

interface ICardMetaProps {
  title?: string;
  description?: string;
}

const CardMeta = (props: ICardMetaProps) => (
  <Card.Meta>
    <SubTitle>{props.title}</SubTitle>
    <SubText>{props.description}</SubText>
  </Card.Meta>
)

export default CardMeta;