import retry from "async-retry";
import * as ethers from "ethers";

import caver from "../klaytn/caver"
import { AnimalCareContract } from "../smartContract/AnimalCareABI";
import { PRIVATE_KEY, ADMIN_ADRESS, ANIMAL_CARE_CA, SMART_CONTRACT_EXECUTION, GAS_LIMIT } from "../constants/define";
import { IAnimalData } from "../constants/interface";

class AnimalCareAPI {
  animalCareCountract: any;

  constructor() {
    caver.klay.accounts.wallet.add(PRIVATE_KEY);
    this.animalCareCountract = new caver.klay.Contract(AnimalCareContract, ANIMAL_CARE_CA);
  }

  public txSetFamily = async(_userDID: String) => {
    const encodedAbi = await this.animalCareCountract.methods.setFamily(_userDID).encodeABI();
    await this.sendTransaction(encodedAbi);
  }
 
  public txSetRegistAnimal = async (_animalID: string, _name: string, _animalType: string, _color: string, _gender: string, _birth: string, _adoptionDate: string, _remarks: string) => {
      const byteName = ethers.utils.formatBytes32String(_name);
      const byteAnimalType = ethers.utils.formatBytes32String(_animalType);
      const byteColor = ethers.utils.formatBytes32String(_color);
      const uintGender = Number(_gender);
      const byteBirth = ethers.utils.formatBytes32String(_birth);
      const byteAdoptionDate = ethers.utils.formatBytes32String(_adoptionDate);

      const encodedAbi = await this.animalCareCountract.methods.setRegistAnimal(_animalID, byteName, byteAnimalType, byteColor, uintGender, byteBirth, byteAdoptionDate, _remarks).encodeABI();
      await this.sendTransaction(encodedAbi);
  }

  public txGetFamily = async (_userDID: string) => {
    return await this.animalCareCountract.methods.getFamily(_userDID).call();
  }

  public txGetAnimalType = async (_animalType: string) => {
    const byteAnimalType = ethers.utils.formatBytes32String(_animalType);
    console.warn(byteAnimalType)
    return await this.animalCareCountract.methods.getAnimalType(byteAnimalType).call();
  }

  public txGetAnimalData = async (_idx: string) => {
    return await this.animalCareCountract.methods.getAnimalData(_idx).call()
    .then((data: any) => {
      const animalData: IAnimalData = {
        animalID: data.animalID,
        name: ethers.utils.parseBytes32String(data.name),
        animalType: ethers.utils.parseBytes32String(data.animalType),
        gender: data.gender,
        birth: ethers.utils.parseBytes32String(data.birth),
        adoptionDate: ethers.utils.parseBytes32String(data.adoptionDate),
        remarks: data.remarks,
      };
      return animalData;
    });
  }

  public txGetAnimalDataArray = async (_idx: string[]) => {
    return await this.animalCareCountract.methods.getAnimalDataArray(_idx).call()
    .then((data: any) => {
      let animalDataArray: Array<IAnimalData> = [];

      for (let i = 0; i < data[0].length; i++) {
        const animalData: IAnimalData = {
          animalID: data[0][i],
          name: ethers.utils.parseBytes32String(data[1][i]),
          animalType: ethers.utils.parseBytes32String(data[2][i]),
          gender: data[3][i],
          birth: ethers.utils.parseBytes32String(data[4][i]),
          adoptionDate: ethers.utils.parseBytes32String(data[5][i]),
        };

        animalDataArray.push(animalData);
      }

      return animalDataArray;
    });
  }

  private sendTransaction = async (encodedAbi) => {
    await retry(() =>  {
      caver.klay.sendTransaction({
        type: SMART_CONTRACT_EXECUTION,
        from: ADMIN_ADRESS,
        to: ANIMAL_CARE_CA,
        data: encodedAbi,
        gas: GAS_LIMIT,
        value: 0
      })
      .then(function(receipt){
        console.log(`
            Received receipt! It means your transaction(calling plus function)
            is in klaytn block(#${receipt.blockNumber})
          `, receipt)
      });
    }, {retries: 5, factor: 1, minTimeout: 300, randomize: true})
  }
}

export const animalCareAPI = new AnimalCareAPI();