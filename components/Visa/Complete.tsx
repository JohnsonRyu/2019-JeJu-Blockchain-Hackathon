import React, { Component, useState } from 'react'
import styled from 'styled-components';
import { Input, Radio, Form, Dropdown, Button, GridColumn, TextArea } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import UserHeader from "../UserHeader/UserHeader"
import Car from "../Common/NavTopHeader"
import Link from 'next/link'

const cardImage = require("../../assets/visa/complete.png");

const MainText = styled.div`
  font-family: 'AppleSDGothicNeo';
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #2e384d;
  text-align: left !important;
  /* float: left !important; */
`

const StyledDiv = styled.div`
  height: 100% !important;
  padding-top: 45px;
  -webkit-tap-highlight-color: transparent;
`

const LeftDiv = styled.div`
/* display: flex; */
width: 312px;
float: left;
`
const StyledFormField = styled(Form.Field)`
  margin-bottom: 12px !important;
  float: left;
  /* height: 50px !important; */
`

const SubmitButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`

const BoldText = styled.b`
  font-weight: 600;
`

const TextDiv = styled.div` 
  display: flex;
  padding-bottom: 20px !important;
`

// const CenterDiv

const SubText = styled(MainText)`
  color: #8798ad;
  font-size: 12px;
  width: 100%;
  float: center;
  padding-bottom: 20px !important;
`

const BoldSubText = styled.span`
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  color: #8798ad;
  margin-top: 194px !important;
`

const NormalSubText = styled(BoldSubText)`
  font-weight: normal;
`

const StyledImage = styled.img`
  /* width: 292px; */
  width: 100%;
  height: 100%;
  /* height: 465px; */
  object-fit: contain;
  /* margin-right: 0px !important; */
`
const Rectangle = styled.div`
  width: 360px;
  height: 364px;
  background-color: #ffffff;
`

const Complete = () => {
  return (
    <StyledDiv>
      <LeftDiv>
        <TextDiv>
          <MainText><BoldText>코코</BoldText>의<br />
            제주도 VISA 발급완료!</MainText>
        </TextDiv>
        <TextDiv>
          <SubText>공항에서 체크인시 VISA를 제시해주세요.</SubText>
        </TextDiv>
        <div>
          <StyledImage src={cardImage} />
        </div>
        <Link href="/MainPage">
          <SubmitButton type="submit" style={{ marginTop: '97px' }}>확인</SubmitButton>
        </Link>
      </LeftDiv>
    </StyledDiv>
  );
}

export default Complete;
