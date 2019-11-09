import React from 'react'
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react'
import CardOne from "../Card/CardOne"
import AddCard from "../Card/AddCard"
import { IAnimalData } from '../../constants/interface'
import { GlobalStore } from '../../stores/globalStore';
import { inject, observer } from 'mobx-react';
import { STORE } from '../../constants/stores';
import { observable } from 'mobx';
import { animalCareAPI } from '../../klaytnAPI/AnimalCareAPI';

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

interface IRegisterProps {
  globalStore?: GlobalStore;
}

@inject(STORE.globalStore)
@observer
export default class Main extends React.Component<IRegisterProps> {
  
  @observable myFamilyIndex: string[] = [];
  @observable myFamilyDataArray: IAnimalData[] = [];

  componentDidMount = async() => {
    this.myFamilyIndex = await animalCareAPI.txGetFamily(this.props.globalStore.userDID.toString());
    console.error("this.myFamilyIndex", this.myFamilyIndex)
    this.myFamilyDataArray = await animalCareAPI.txGetAnimalDataArray(this.myFamilyIndex);
    console.error("myFamilyDataArray", this.myFamilyDataArray)
  }

  render() {
    return(
      <StyledGrid>
        <StyledGridColumn>
          {this.myFamilyDataArray.map((d: IAnimalData, i: number) => (
            <CardOne itemList={d} key={i} />
          ))}
          <AddCard isAuth={true} />
        </StyledGridColumn>
      </StyledGrid>
    );
  }
}