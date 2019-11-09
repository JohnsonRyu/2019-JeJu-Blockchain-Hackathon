const AnimalCareContract = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"name": "_adoptionDate",
				"type": "bytes32"
			}
		],
		"name": "setAdoptionDate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_adoptionDate",
				"type": "bytes32"
			}
		],
		"name": "getAdoptionDate",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_color",
				"type": "bytes32"
			}
		],
		"name": "getColor",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "setRemarks",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes32"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "animalDataCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userDID",
				"type": "uint256[]"
			},
			{
				"name": "_animalID",
				"type": "uint256[]"
			},
			{
				"name": "_name",
				"type": "bytes32[]"
			},
			{
				"name": "_animalType",
				"type": "bytes32[]"
			},
			{
				"name": "_color",
				"type": "bytes32[]"
			},
			{
				"name": "_gender",
				"type": "uint8[]"
			},
			{
				"name": "_birth",
				"type": "bytes32[]"
			}
		],
		"name": "setMultiRegistAnimal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_name",
				"type": "bytes32"
			}
		],
		"name": "getAnimalType",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_animalID",
				"type": "uint256"
			}
		],
		"name": "getAnimalID",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userDID",
				"type": "uint256"
			}
		],
		"name": "setFamily",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "getRemarks",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_idx",
				"type": "uint256"
			}
		],
		"name": "getAnimalData",
		"outputs": [
			{
				"name": "animalID",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "animalType",
				"type": "bytes32"
			},
			{
				"name": "color",
				"type": "bytes32"
			},
			{
				"name": "gender",
				"type": "uint8"
			},
			{
				"name": "birth",
				"type": "bytes32"
			},
			{
				"name": "adoptionDate",
				"type": "bytes32"
			},
			{
				"name": "remarks",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "bytes32"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_gender",
				"type": "uint8"
			}
		],
		"name": "getGender",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_userDID",
				"type": "uint256"
			}
		],
		"name": "getFamily",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "bytes32"
			},
			{
				"name": "_animalType",
				"type": "bytes32"
			},
			{
				"name": "_color",
				"type": "bytes32"
			},
			{
				"name": "_gender",
				"type": "uint8"
			},
			{
				"name": "_birth",
				"type": "bytes32"
			},
			{
				"name": "_adoptionDate",
				"type": "bytes32"
			},
			{
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "setRegistAnimal",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "animalDataArray",
		"outputs": [
			{
				"name": "animalID",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "animalType",
				"type": "bytes32"
			},
			{
				"name": "color",
				"type": "bytes32"
			},
			{
				"name": "gender",
				"type": "uint8"
			},
			{
				"name": "birth",
				"type": "bytes32"
			},
			{
				"name": "adoptionDate",
				"type": "bytes32"
			},
			{
				"name": "remarks",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_idx",
				"type": "uint256[]"
			}
		],
		"name": "getAnimalDataArray",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "uint8[]"
			},
			{
				"name": "",
				"type": "bytes32[]"
			},
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_birth",
				"type": "bytes32"
			}
		],
		"name": "getBirth",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_name",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_animalType",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_color",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_gender",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "_birth",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_adoptionDate",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "RegistAnimalEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_beforeName",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_AfterName",
				"type": "bytes32"
			}
		],
		"name": "ChangeAnimalNameEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_beforeAdoptionDate",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_afterAdoptionDate",
				"type": "bytes32"
			}
		],
		"name": "ChangeAnimalAdoptionDateEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_animalID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_beforeRemarks",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_afterRemarks",
				"type": "string"
			}
		],
		"name": "ChangeAnimalRemarksEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
];

export {
  AnimalCareContract
};

