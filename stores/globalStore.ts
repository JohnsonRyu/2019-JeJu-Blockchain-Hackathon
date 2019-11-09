import { observable, action } from "mobx";

export class GlobalStore {
  @observable name: string = "";
  @observable animalType: string = "";
  @observable colorType: string = "";
  @observable gender: string = "0";
  @observable neutralization: string = "0";

  @action
  updateName = (value: string) => {
    this.name = value;
  };

  @action
  animalTypeChange = (_e: any, { value }: any) => {
    this.animalType = value;
  };

  @action
  colorTypeChange = (_e: any, { value }: any) => {
    this.colorType = value;
  };

  @action
  genderClick = (_type: string) => {
    this.gender = _type;
  }

  @action
  neutralizationClick = (_type: string) => {
    this.neutralization = _type;
  }

  @action
  clearFirstRegistPage = () => {
    this.name = "";
    this.animalType = "";
    this.colorType = "";
    this.gender = "0";
    this.neutralization = "0";
  }
}
