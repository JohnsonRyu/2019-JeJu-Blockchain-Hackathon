import retry from "async-retry";
import * as ethers from "ethers";

import caver from "../klaytn/caver"
import { AnimalCareContract } from "../smartContract/AnimalCareABI";
import { PRIVATE_KEY, ADMIN_ADRESS, ANIMAL_CARE_CA, SMART_CONTRACT_EXECUTION, GAS_LIMIT } from "../constants/define";

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
    return await this.animalCareCountract.methods.getAnimalType(byteAnimalType).call();
  }

  public txGetAnimalData = async (_idx: string) => {
    return await this.animalCareCountract.methods.getAnimalData(_idx).call();
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