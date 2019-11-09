import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Form, Dropdown, Button, GridColumn, TextArea } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import UserHeader from "../UserHeader/UserHeader"
import NavTopHeader from "../Common/NavTopHeader"
import Link from 'next/link'

// const StyledGrid = styled(Grid)`
//   text-align: left;
//   vertical-align: middle;
//   height: 575px;
//   /* height: 100vh; */
// `

// const StyledGridColumn = styled(Grid.Column)`
//   max-width: 450;
// `

const MainText = styled.div`
  font-size: 18px;
  font-weight: 300 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #2e384d;
  padding-bottom: 12px !important;
  text-align: left !important;
`

const StyledDiv = styled.div`
  padding-top: 45px;
  -webkit-tap-highlight-color: transparent;

`
const LeftDiv = styled.div`
/* display: flex; */
width: 312px;
float: left;
`
const StyledFormField = styled(Form.Field)`
  margin-bottom: 40px !important;
`

const SubmitButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`

const SelectButton = styled(Button)`
  /* height: 25px !important; */
  border-radius: 4px !important;
  margin-bottom: 10px !important;
  padding: 9px !important;
  margin-right: 8px !important;
`
const DivFloat = styled.div`
float: left;
text-align: left;
/* margin-bottom: 40px !important; */
`

// <Card.Group> 으로 카드 그룹 묶으면 가운데 정렬되지 않음
export default class RegisterTwo extends React.Component {
  state = {
    isClicked: false
  };

  handleItemClick = () =>
    this.setState({
      isClicked: true
    });

  render() {
    return (
      <StyledDiv>
        <LeftDiv>
          <Form>
            <StyledFormField>
              <MainText>입양일을 입력해주세요</MainText>
              <input type="text" placeholder='20171022' />
            </StyledFormField>
            <StyledFormField>
              <MainText>생년월일을 입력해주세요</MainText>
              <input type="text" placeholder='20171022' />
            </StyledFormField>
            <StyledFormField>
              <MainText>병력을 적어주세요</MainText>
              <DivFloat>
                <SelectButton basic size="mini">슬개골</SelectButton>
                <SelectButton basic size="mini">결석</SelectButton>
                <SelectButton basic size="mini">습진</SelectButton>
                <SelectButton basic size="mini">눈물자국</SelectButton>
                <SelectButton basic size="mini">각막손상</SelectButton>
                <SelectButton basic size="mini">기관지협착증</SelectButton>
                <SelectButton basic size="mini">발작</SelectButton>
                <SelectButton basic size="mini">피부질환</SelectButton>
              </DivFloat>
              <TextArea placeholder='기타 (30자 이내)' />
            </StyledFormField>
            <Link href="/RegisterThirdPage">
              <SubmitButton type="submit">다음</SubmitButton>
            </Link>
          </Form>
        </LeftDiv>
      </StyledDiv>
    );

  }

}