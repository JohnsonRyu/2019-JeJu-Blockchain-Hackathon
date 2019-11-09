import React from 'react'
import styled from 'styled-components';
import { Grid, Card, Form, Input, Dropdown, Button, GridColumn } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import UserHeader from "../UserHeader/UserHeader"
import NavTopHeader from "../Common/NavTopHeader"
import Link from 'next/link'

const animalType = [
  { key: 'rt', value: 'rt', text: '리트리버' },
  { key: 'sc', value: 'sc', text: '시츄' },
  { key: 'sb', value: 'sb', text: '시바견' },
  { key: 'bg', value: 'bg', text: '비글' },
  { key: 'pm', value: 'pm', text: '포메리안' },
]

const hairColorType = [
  { key: 'gold', value: 'gold', text: '금색' },
  { key: 'black', value: 'black', text: '검정색' },
  { key: 'white', value: 'white', text: '흰색' },
  { key: 'grey', value: 'grey', text: '회색' },
  { key: 'brown', value: 'brown', text: '적갈색' },
]

interface IRegisterProps {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  isClicked?: boolean;
  primary?: boolean;
}

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

const StyledImage = styled.img`
  width: 292px;
  height: 465px;
  object-fit: contain;
  margin-right: 0px !important;
`

// const StyledButton = styled(Button)`
//   width: 312px;
//   height: 50px;
//   border-radius: 4px;
//   background-color: #2e5bff !important;
//   color: #ffffff !important;
// `

const WrapperDiv = styled.div`
position: relative;
`
// const ButtonDiv = styled.div`
//   position: absolute;
//   left: -10px;
//   bottom: 0.7em;
// `
const LeftDiv = styled.div`
/* display: flex; */
width: 312px;
float: left;
`
const StyledFormField = styled(Form.Field)`
  margin-bottom: 40px !important;
`

const StyledInput = styled(Input)`
  /* not good to add */
  /* border: solid 1px #ced0da !important; */
`
const InputWrapper = styled.div`
  padding-bottom: 40px;
`

const StyledButton = styled(Button)`
  width: 148px;
  height: 36px;
  border-radius: 5px;
  border: solid 1px #2e5bff;
  background: #ffffff !important;
`;

const SubmitButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`

// <Card.Group> 으로 카드 그룹 묶으면 가운데 정렬되지 않음
export default class Register extends React.Component {
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
              <MainText>반려견 이름이 무엇인가요?</MainText>
              <input placeholder='최대 15자' />
            </StyledFormField>
            <StyledFormField>
              <MainText>품종을 선택해주세요</MainText>
              <Dropdown
                placeholder='선택'
                fluid
                search
                selection
                options={animalType}
              />
            </StyledFormField>
            <StyledFormField>
              <MainText>모색을 선택해주세요</MainText>
              <Dropdown
                placeholder='선택'
                fluid
                search
                selection
                options={hairColorType}
              />
            </StyledFormField>
            <StyledFormField>
              <MainText>성별을 선택해주세요</MainText>
              {/* TODO: color does not change */}
              <StyledButton basic>수컷</StyledButton>
              <StyledButton basic>암컷</StyledButton>
            </StyledFormField>
            <StyledFormField>
              <MainText>중성화 수술을 했나요?</MainText>
              {/* TODO: color does not change */}
              <StyledButton basic>예</StyledButton>
              <StyledButton basic>아니오</StyledButton>
            </StyledFormField>
            <Link href="/RegisterSecondPage">
              <SubmitButton>다음</SubmitButton>
            </Link>
          </Form>
        </LeftDiv>
      </StyledDiv>
    );

  }

}