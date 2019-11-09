pragma solidity ^0.4.24;

// ----------------------------------------------------------------------------
// @title Ownable
// ----------------------------------------------------------------------------
contract Ownable {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() { require(msg.sender == owner); _; }

    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0));
        emit OwnershipTransferred(owner, _newOwner);
        owner = _newOwner;
    }
}
// ----------------------------------------------------------------------------
// @title ByteToString
// ----------------------------------------------------------------------------
contract ByteToString {
    function bytes32ToString(bytes32 x) internal pure returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }

    function bytes32ArrayToString(bytes32[] data) internal pure returns (string) {
        bytes memory bytesString = new bytes(data.length * 32);
        uint urlLength;
        for (uint i=0; i<data.length; i++) {
            for (uint j=0; j<32; j++) {
                byte char = byte(bytes32(uint(data[i]) * 2 ** (8 * j)));
                if (char != 0) {
                    bytesString[urlLength] = char;
                    urlLength += 1;
                }
            }
        }
        bytes memory bytesStringTrimmed = new bytes(urlLength);
        for (i=0; i<urlLength; i++) {
            bytesStringTrimmed[i] = bytesString[i];
        }
        return string(bytesStringTrimmed);
    }
}
// ----------------------------------------------------------------------------
// @title IAnimalCareSetDataBase
// ----------------------------------------------------------------------------
interface IAnimalCareSetDataBase {
    function setRegistAnimal(uint256 _animalID, bytes32 _name, bytes32 _animalType, bytes32 _color, uint8 _gender, bytes32 _birth, bytes32 _adoptionDate, string _remarks) external;
    function setMultiRegistAnimal(uint256[] _animalID, bytes32[] _name, bytes32[] _animalType, bytes32[] _color, uint8[] _gender,bytes32[] _birth, bytes32[] _adoptionDate) external;
}
// ----------------------------------------------------------------------------
// @title IAnimalCareGetDataBase
// ----------------------------------------------------------------------------
interface IAnimalCareGetDataBase {
    function getAnimalID(uint256 _animalID) external view returns (uint256);
    function getName(bytes32 _name) external view returns (uint256[]);
    function getAnimalType(bytes32 _name) external view returns (uint256[]);
    function getColor(bytes32 _color) external view returns (uint256[]);
    function getGender(uint8 _gender) external view returns (uint256[]);
    function getBirth(bytes32 _birth) external view returns (uint256[]);
    function getAdoptionDate(bytes32 _adoptionDate) external view returns (uint256[]);
    function getRemarks(string _remarks) external view returns (uint256[]);
    function getAnimalData(uint256 _idx) external view returns(
        bytes32 name, 
        bytes32 animalType, 
        bytes32 color, 
        uint8 gender, 
        bytes32 birth, 
        bytes32 adoptionDate, 
        string remarks
    );
     function getAnimalDataArray(uint256[] _idx) external view returns(
        bytes32[], 
        bytes32[], 
        bytes32[], 
        uint8[], 
        bytes32[], 
        bytes32[]
    );
}
// ----------------------------------------------------------------------------
// @title IAnimalCareDataBaseEvent
// ----------------------------------------------------------------------------
interface IAnimalCareDataBaseEvent {
    event RegistAnimalEvent(uint256 _animalID, bytes32 _name, bytes32 _animalType, bytes32 _color, uint8 _gender, bytes32 _birth, bytes32 _adoptionDate, string _remarks);
    event ChangeAnimalNameEvent(uint256 _animalID, bytes32 _beforeName, bytes32 _AfterName);
    event ChangeAnimalAdoptionDateEvent(uint256 _animalID, bytes32 _beforeAdoptionDate, bytes32 _afterAdoptionDate);
    event ChangeAnimalRemarksEvent(uint256 _animalID, string _beforeRemarks, string _afterRemarks);
}
// ----------------------------------------------------------------------------
// @title AnimalCareDataBase
// ----------------------------------------------------------------------------
contract AnimalCareDataBase is Ownable, ByteToString, IAnimalCareSetDataBase, IAnimalCareGetDataBase, IAnimalCareDataBaseEvent {
    struct AnimalData  {
        uint256 animalID;        // 동물 등록 번호
        bytes32 name;            // 이름
        bytes32 animalType;      // 품종
        bytes32 color;           // 털색
        uint8 gender;            // 0 암 1 수 2 중성
        bytes32 birth;           // 생년월일
        bytes32 adoptionDate;    // 취득일
        string remarks;          // 특이사항
    }

    AnimalData[] public animalDataArray;
    uint256 public animalDataCount;
   
    mapping(uint256 => uint256) private mapAnimalID;
    mapping(bytes32 => uint256[]) private mapName;
    mapping(bytes32 => uint256[]) private mapAnimalType;
    mapping(bytes32 => uint256[]) private mapColor;
    mapping(uint8 => uint256[]) private mapGender;
    mapping(bytes32 => uint256[]) private mapBirth;
    mapping(bytes32 => uint256[]) private mapAdoptionDate;
    mapping(string => uint256[]) private mapRemarks;
    
    function setRegistAnimal(uint256 _animalID, bytes32 _name, bytes32 _animalType, bytes32 _color, uint8 _gender, bytes32 _birth, bytes32 _adoptionDate, string _remarks) external onlyOwner {
        setAnimalArray(_animalID, _name, _animalType, _color, _gender, _birth, _adoptionDate, _remarks);
    }
    
    function setMultiRegistAnimal(uint256[] _animalID, bytes32[] _name, bytes32[] _animalType, bytes32[] _color, uint8[] _gender,bytes32[] _birth, bytes32[] _adoptionDate) external onlyOwner {
        for(uint16 ui = 0; ui < _name.length; ui++) {
            setAnimalArray(_animalID[ui], _name[ui], _animalType[ui], _color[ui], _gender[ui], _birth[ui], _adoptionDate[ui], "");
        }
    }
    
    function setAnimalArray(uint256 _animalID, bytes32 _name, bytes32 _animalType, bytes32 _color, uint8 _gender, bytes32 _birth, bytes32 _adoptionDate, string _remarks) internal {
        AnimalData memory _animalData;     
        _animalData.animalID = _animalID;
        _animalData.name = _name;
        _animalData.animalType = _animalType;
        _animalData.color = _color;
        _animalData.gender = _gender;
        _animalData.birth = _birth;
        _animalData.adoptionDate = _adoptionDate;
        _animalData.remarks = _remarks;
        
        animalDataArray.push(_animalData);
        
        // mapping 함수 정보 등록
        mapAnimalID[_animalID] = animalDataCount;
        mapName[_name].push(animalDataCount);
        mapAnimalType[_animalType].push(animalDataCount);
        mapColor[_color].push(animalDataCount);
        mapGender[_gender].push(animalDataCount);
        mapBirth[_birth].push(animalDataCount);
        mapAdoptionDate[_adoptionDate].push(animalDataCount);
        mapRemarks[_remarks].push(animalDataCount);
        
        animalDataCount++;
        
        emit RegistAnimalEvent(_animalID, _name, _animalType, _color, _gender, _birth, _adoptionDate, _remarks);
    }
    
    // 바뀔 수 있는 데이터 (Key값 동물 등록 ID)
    function setName(uint256 _animalID, bytes32 _name) external onlyOwner {
        emit ChangeAnimalNameEvent(_animalID, animalDataArray[mapAnimalID[_animalID]].name, _name);
        
        delete mapName[animalDataArray[mapAnimalID[_animalID]].name];
        animalDataArray[mapAnimalID[_animalID]].name = _name;
        mapName[_name].push(mapAnimalID[_animalID]);
    }
    
    // 입양으로 인한 변경
    function setAdoptionDate(uint256 _animalID, bytes32 _adoptionDate) external onlyOwner {
        emit ChangeAnimalAdoptionDateEvent(_animalID, animalDataArray[mapAnimalID[_animalID]].adoptionDate, _adoptionDate);
        
        delete mapAdoptionDate[animalDataArray[mapAnimalID[_animalID]].adoptionDate];
        animalDataArray[mapAnimalID[_animalID]].adoptionDate = _adoptionDate;
        mapAdoptionDate[_adoptionDate].push(mapAnimalID[_animalID]);
    }
    
    // 특이사항 변경
    function setRemarks(uint256 _animalID, string _remarks) external onlyOwner {
        emit ChangeAnimalRemarksEvent(_animalID, animalDataArray[mapAnimalID[_animalID]].remarks, _remarks);
        
        delete mapRemarks[animalDataArray[mapAnimalID[_animalID]].remarks];
        animalDataArray[mapAnimalID[_animalID]].remarks = _remarks;
        mapRemarks[_remarks].push(mapAnimalID[_animalID]);
    }
    
    function getAnimalID(uint256 _animalID) external view returns (uint256) {
        return mapAnimalID[_animalID];
    }
    
    function getName(bytes32 _name) external view returns (uint256[]) {
        return mapName[_name];
    }
    
    function getAnimalType(bytes32 _name) external view returns (uint256[]) {
        return mapAnimalType[_name];
    }
    
    function getColor(bytes32 _color) external view returns (uint256[]) {
        return mapColor[_color];
    }
    
    function getGender(uint8 _gender) external view returns (uint256[]) {
        return mapGender[_gender];
    }
    
    function getBirth(bytes32 _birth) external view returns (uint256[]) {
        return mapBirth[_birth];
    }
    
    function getAdoptionDate(bytes32 _adoptionDate) external view returns (uint256[]) {
        return mapAdoptionDate[_adoptionDate];
    }
    
    function getRemarks(string _remarks) external view returns (uint256[]) {
        return mapRemarks[_remarks];
    }
    
    function getAnimalData(uint256 _idx) external view returns(
        bytes32 name, 
        bytes32 animalType, 
        bytes32 color, 
        uint8 gender, 
        bytes32 birth, 
        bytes32 adoptionDate, 
        string remarks
    ) {
        name = animalDataArray[_idx].name;
        animalType = animalDataArray[_idx].animalType;
        color = animalDataArray[_idx].color;
        gender = animalDataArray[_idx].gender;
        birth = animalDataArray[_idx].birth;
        adoptionDate = animalDataArray[_idx].adoptionDate;
        remarks = animalDataArray[_idx].remarks;
    }
    
     function getAnimalDataArray(uint256[] _idx) external view returns(
        bytes32[], 
        bytes32[], 
        bytes32[], 
        uint8[], 
        bytes32[], 
        bytes32[]
    ) {
        bytes32[] memory name = new bytes32[](_idx.length);
        bytes32[] memory animalType = new bytes32[](_idx.length);
        bytes32[] memory color = new bytes32[](_idx.length);
        uint8[] memory gender = new uint8[](_idx.length);
        bytes32[] memory birth = new bytes32[](_idx.length);
        bytes32[] memory adoptionDate = new bytes32[](_idx.length);
        
         for(uint16 ui = 0; ui < _idx.length; ui++) {
             name[ui] = animalDataArray[_idx[ui]].name;
             animalType[ui] = animalDataArray[_idx[ui]].animalType;
             color[ui] = animalDataArray[_idx[ui]].color;
             gender[ui] = animalDataArray[_idx[ui]].gender;
             birth[ui] = animalDataArray[_idx[ui]].birth;
             adoptionDate[ui] = animalDataArray[_idx[ui]].adoptionDate;
        }
        
        return (name, animalType, color, gender, birth, adoptionDate);
    }
}