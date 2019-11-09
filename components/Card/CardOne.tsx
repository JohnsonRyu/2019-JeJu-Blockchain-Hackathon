import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Icon, Image, Button, Divider, Segment, GridColumn } from 'semantic-ui-react'
import CardMeta from './CardMeta';
import CardHeader from './CardHeader';
import Link from 'next/link'
import { IAnimalData } from '../../constants/interface'
import { parsingAPI } from '../../commonAPI/parsingAPI'
import { observer } from 'mobx-react';
import { observable } from 'mobx';
const dogFace = require("../../assets/face.png")
const dogFull = require("../../assets/sibaFull.png")

interface ICardOneProps {
  children?: JSX.Element | JSX.Element[];
  text?: string;
  className?: string;
  backText?: string;
  itemList: IAnimalData;
}

const GridButtonGroup = styled(GridColumn)`
  padding: 0 !important;
`
const ColoredTextButton = styled.button`
  border: 0 !important;
  outline: 0 !important;
  font-size: 14px;
  font-weight: 600;
  color: #5c7fff;

  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
`

const NoneColoredTextButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #586e89;

  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
`

const StyledCard = styled(Card)`
/* to remove ios safari grey box */
  -webkit-tap-highlight-color: transparent;
  border-radius: 12px !important;
  background-color: #ffffff !important;
  box-shadow: 0 10px 20px 0 rgba(46, 91, 255, 0.07) !important;
  border: solid 1px rgba(46, 91, 255, 0.08) !important;
`

const LeftAlignedCardContent = styled(Card.Content)`
  text-align: left;
`

const RightTopText = styled(Card.Header)`
  font-family: 'Montserrat' !important;
  font-size: 12px !important;
  font-weight: normal !important;
  font-stretch: normal !important;
  font-style: normal !important;
  line-height: normal !important;
  letter-spacing: normal !important;
  color: #586e89 !important;
  text-align: left !important;
  border: none !important;
  margin-bottom: 5px !important;
`

@observer
export default class CardOne extends React.Component<ICardOneProps> {

  @observable gender = ""

  parseGender() {
    if (this.props.itemList.gender.toString() === "0") {
      this.gender = "여"
    } else if (this.props.itemList.gender.toString() === "1") {
      this.gender = "남"
    } else {
      this.gender = "무"
    }
  }

  render() {
    this.parseGender();
    console.error(this.gender)
    return(
      <StyledCard>
      <LeftAlignedCardContent>
        <RightTopText>댕댕이 VISA</RightTopText>
        <Image
          floated='left'
          size='tiny'
          src={dogFace}
        />
        <CardHeader title={this.props.itemList.name}
          description={"(" + this.gender + ", " + this.props.itemList.animalType + ")"}
        />
        <CardMeta title="생년월일" description={this.props.itemList.birth} />
        <CardMeta title="등록번호" description={this.props.itemList.animalID} />
        <CardMeta title="등록일자" description={parsingAPI.getDate()} />
      </LeftAlignedCardContent>
      <Card.Content extra>
        <Grid columns={2} celled='internally' >
          <GridButtonGroup>
            <Link href="/VisaFlightPage">
              <ColoredTextButton>VISA 발급</ColoredTextButton>
            </Link>
          </GridButtonGroup>
          <GridButtonGroup>
            <NoneColoredTextButton>이용내역</NoneColoredTextButton>
          </GridButtonGroup>
        </Grid>
      </Card.Content>
    </StyledCard>
    );
  }
}