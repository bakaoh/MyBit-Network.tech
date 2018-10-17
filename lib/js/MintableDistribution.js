"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MintableDistribution = exports.MintableDistribution = 
{
  "contractName": "MintableDistribution",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "supply",
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
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minter",
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
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [],
      "name": "assetIncome",
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
      "constant": true,
      "inputs": [],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "constant": true,
      "inputs": [],
      "name": "valuePerToken",
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
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUnclaimedAmount",
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
      "inputs": [],
      "name": "issueDividends",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "claimableIncome",
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "previousValuePerToken",
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
      "constant": true,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getTokenValue",
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
      "inputs": [
        {
          "name": "_tokenURI",
          "type": "string"
        },
        {
          "name": "_minter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_paymentAmount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_block",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "LogIncomeCollected",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600760006101000a81548160ff02191690831515021790555034801561002b57600080fd5b50604051610fe8380380610fe8833981018060405281019080805182019291906020018051906020019092919050505081600290805190602001906100719291906100ba565b5080600760016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061015f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100fb57805160ff1916838001178555610129565b82800160010185558215610129579182015b8281111561012857825182559160200191906001019061010d565b5b509050610136919061013a565b5090565b61015c91905b80821115610158576000816000905550600101610140565b5090565b90565b610e7a8061016e6000396000f3006080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa146101a057806305d2035b146101cb57806307546172146101fa57806318160ddd146102515780632ba1b3a11461027c5780633c130d90146102a75780633ccfd60b1461033757806340c10f191461036257806370a08231146103c75780637d64bcb41461041e578063a8fa8e521461044d578063b815239514610478578063eba74e5c146104cf578063ec8593be146104d9578063efcb5dea14610530578063f1c5d6c214610587575b61012f61011e6000546101106d04ee2d6d415b85acef8100000000346105de90919063ffffffff16565b61061990919063ffffffff16565b60045461062f90919063ffffffff16565b60048190555061014a3460035461062f90919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b3480156101ac57600080fd5b506101b561064d565b6040518082815260200191505060405180910390f35b3480156101d757600080fd5b506101e0610653565b604051808215151515815260200191505060405180910390f35b34801561020657600080fd5b5061020f610666565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025d57600080fd5b5061026661068c565b6040518082815260200191505060405180910390f35b34801561028857600080fd5b50610291610695565b6040518082815260200191505060405180910390f35b3480156102b357600080fd5b506102bc61069b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102fc5780820151818401526020810190506102e1565b50505050905090810190601f1680156103295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561034357600080fd5b5061034c610739565b6040518082815260200191505060405180910390f35b34801561036e57600080fd5b506103ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610982565b604051808215151515815260200191505060405180910390f35b3480156103d357600080fd5b50610408600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b01565b6040518082815260200191505060405180910390f35b34801561042a57600080fd5b50610433610b4a565b604051808215151515815260200191505060405180910390f35b34801561045957600080fd5b50610462610c0f565b6040518082815260200191505060405180910390f35b34801561048457600080fd5b506104b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c15565b6040518082815260200191505060405180910390f35b6104d7610c98565b005b3480156104e557600080fd5b5061051a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b6040518082815260200191505060405180910390f35b34801561053c57600080fd5b50610571600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d6a565b6040518082815260200191505060405180910390f35b34801561059357600080fd5b506105c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d82565b6040518082815260200191505060405180910390f35b60008060008414156105f35760009150610612565b828402905082848281151561060457fe5b0414151561060e57fe5b8091505b5092915050565b6000818381151561062657fe5b04905092915050565b600080828401905083811015151561064357fe5b8091505092915050565b60005481565b600760009054906101000a900460ff1681565b600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107315780601f1061070657610100808354040283529160200191610731565b820191906000526020600020905b81548152906001019060200180831161071457829003601f168201915b505050505081565b60003361079661074882610d82565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461062f90919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061087f6d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461061990919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561090a573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600760009054906101000a900460ff161580156109ee5750600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156109f957600080fd5b610a0e8260005461062f90919063ffffffff16565b600081905550610a6682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461062f90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a26001905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600760009054906101000a900460ff16158015610bb65750600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610bc157600080fd5b6001600760006101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b60045481565b6000610c916d04ee2d6d415b85acef8100000000610c83600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c7586610d82565b61062f90919063ffffffff16565b61061990919063ffffffff16565b9050919050565b610ce1610cd0600054610cc26d04ee2d6d415b85acef8100000000346105de90919063ffffffff16565b61061990919063ffffffff16565b60045461062f90919063ffffffff16565b600481905550610cfc3460035461062f90919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610dd9600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610e3590919063ffffffff16565b9050610e2d600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826105de90919063ffffffff16565b915050919050565b6000828211151515610e4357fe5b8183039050929150505600a165627a7a72305820d565919b4fc09158723e2f0fcb51e3c5f0b52362aaad48f9972d66c44e8a12b50029",
  "deployedBytecode": "0x6080604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063047fc9aa146101a057806305d2035b146101cb57806307546172146101fa57806318160ddd146102515780632ba1b3a11461027c5780633c130d90146102a75780633ccfd60b1461033757806340c10f191461036257806370a08231146103c75780637d64bcb41461041e578063a8fa8e521461044d578063b815239514610478578063eba74e5c146104cf578063ec8593be146104d9578063efcb5dea14610530578063f1c5d6c214610587575b61012f61011e6000546101106d04ee2d6d415b85acef8100000000346105de90919063ffffffff16565b61061990919063ffffffff16565b60045461062f90919063ffffffff16565b60048190555061014a3460035461062f90919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2005b3480156101ac57600080fd5b506101b561064d565b6040518082815260200191505060405180910390f35b3480156101d757600080fd5b506101e0610653565b604051808215151515815260200191505060405180910390f35b34801561020657600080fd5b5061020f610666565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025d57600080fd5b5061026661068c565b6040518082815260200191505060405180910390f35b34801561028857600080fd5b50610291610695565b6040518082815260200191505060405180910390f35b3480156102b357600080fd5b506102bc61069b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102fc5780820151818401526020810190506102e1565b50505050905090810190601f1680156103295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561034357600080fd5b5061034c610739565b6040518082815260200191505060405180910390f35b34801561036e57600080fd5b506103ad600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610982565b604051808215151515815260200191505060405180910390f35b3480156103d357600080fd5b50610408600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b01565b6040518082815260200191505060405180910390f35b34801561042a57600080fd5b50610433610b4a565b604051808215151515815260200191505060405180910390f35b34801561045957600080fd5b50610462610c0f565b6040518082815260200191505060405180910390f35b34801561048457600080fd5b506104b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c15565b6040518082815260200191505060405180910390f35b6104d7610c98565b005b3480156104e557600080fd5b5061051a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b6040518082815260200191505060405180910390f35b34801561053c57600080fd5b50610571600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d6a565b6040518082815260200191505060405180910390f35b34801561059357600080fd5b506105c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d82565b6040518082815260200191505060405180910390f35b60008060008414156105f35760009150610612565b828402905082848281151561060457fe5b0414151561060e57fe5b8091505b5092915050565b6000818381151561062657fe5b04905092915050565b600080828401905083811015151561064357fe5b8091505092915050565b60005481565b600760009054906101000a900460ff1681565b600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054905090565b60035481565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107315780601f1061070657610100808354040283529160200191610731565b820191906000526020600020905b81548152906001019060200180831161071457829003601f168201915b505050505081565b60003361079661074882610d82565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461062f90919063ffffffff16565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600454600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061087f6d04ee2d6d415b85acef8100000000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461061990919063ffffffff16565b9150600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090553373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561090a573d6000803e3d6000fd5b507f10db2ba5699bf5dbd1070a0c0b207f229dc1ecb78bbe555b84cab3db9576ac42423384604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15090565b6000600760009054906101000a900460ff161580156109ee5750600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156109f957600080fd5b610a0e8260005461062f90919063ffffffff16565b600081905550610a6682600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461062f90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a26001905092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600760009054906101000a900460ff16158015610bb65750600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610bc157600080fd5b6001600760006101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b60045481565b6000610c916d04ee2d6d415b85acef8100000000610c83600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c7586610d82565b61062f90919063ffffffff16565b61061990919063ffffffff16565b9050919050565b610ce1610cd0600054610cc26d04ee2d6d415b85acef8100000000346105de90919063ffffffff16565b61061990919063ffffffff16565b60045461062f90919063ffffffff16565b600481905550610cfc3460035461062f90919063ffffffff16565b6003819055503373ffffffffffffffffffffffffffffffffffffffff167fe3166012cb87b3dec8e117fe0e096a47387f94ea2ec12086ed8ae24ff8c237fe346040518082815260200191505060405180910390a2565b60056020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b600080610dd9600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600454610e3590919063ffffffff16565b9050610e2d600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826105de90919063ffffffff16565b915050919050565b6000828211151515610e4357fe5b8183039050929150505600a165627a7a72305820d565919b4fc09158723e2f0fcb51e3c5f0b52362aaad48f9972d66c44e8a12b50029",
  "sourceMap": "484:1645:38:-;;;599:5;569:35;;;;;;;;;;;;;;;;;;;;672:165;8:9:-1;5:2;;;30:1;27;20:12;5:2;672:165:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;747:9;736:8;:20;;;;;;;;;;;;:::i;:::-;;825:7;816:6;;:16;;;;;;;;;;;;;;;;;;672:165;;484:1645;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "484:1645:38:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2170:59:39;2188:40;2221:6;;2188:28;795:4;2188:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;2170:13;;:17;;:59;;;;:::i;:::-;2154:13;:75;;;;2251:26;2267:9;2251:11;;:15;;:26;;;;:::i;:::-;2237:11;:40;;;;2308:10;2290:40;;;2320:9;2290:40;;;;;;;;;;;;;;;;;;484:1645:38;552:18:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;552:18:39;;;;;;;;;;;;;;;;;;;;;;;569:35:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;569:35:38;;;;;;;;;;;;;;;;;;;;;;;;;;;608:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;608:21:38;;;;;;;;;;;;;;;;;;;;;;;;;;;3134:77:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3134:77:39;;;;;;;;;;;;;;;;;;;;;;;803:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;803:23:39;;;;;;;;;;;;;;;;;;;;;;;622:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;622:22:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;622:22:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1044:294:39;;;;;;;;;;;;;;;;;;;;;;;990:213:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;990:213:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3215:99:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3215:99:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1255:136:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1255:136:38;;;;;;;;;;;;;;;;;;;;;;;;;;;830:25:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;830:25:39;;;;;;;;;;;;;;;;;;;;;;;2965:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2965:165:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1795:234;;;;;;860:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;860:48:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;912:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;912:54:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2649:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2649:221:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;310:173:25;368:7;423:9;392:1;387;:6;383:35;;;410:1;403:8;;;;383:35;439:1;435;:5;423:17;;462:1;457;453;:5;;;;;;;;:10;446:18;;;;;;477:1;470:8;;310:173;;;;;;:::o;558:272::-;616:7;824:1;820;:5;;;;;;;;813:12;;558:272;;;;:::o;1100:129::-;1158:7;1173:9;1189:1;1185;:5;1173:17;;1208:1;1203;:6;;1196:14;;;;;;1223:1;1216:8;;1100:129;;;;;:::o;552:18:39:-;;;;:::o;569:35:38:-;;;;;;;;;;;;;:::o;608:21::-;;;;;;;;;;;;;:::o;3134:77:39:-;3178:7;3200:6;;3193:13;;3134:77;:::o;803:23::-;;;;:::o;622:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1044:294::-;1120:12;1097:10;3765:48;3792:20;3806:5;3792:13;:20::i;:::-;3765:15;:22;3781:5;3765:22;;;;;;;;;;;;;;;;:26;;:48;;;;:::i;:::-;3740:15;:22;3756:5;3740:22;;;;;;;;;;;;;;;:73;;;;3852:13;;3821:21;:28;3843:5;3821:28;;;;;;;;;;;;;;;:44;;;;1152:46;795:4;1152:15;:27;1168:10;1152:27;;;;;;;;;;;;;;;;:31;;:46;;;;:::i;:::-;1142:56;;1213:15;:27;1229:10;1213:27;;;;;;;;;;;;;;;1206:34;;;1248:10;:19;;:28;1268:7;1248:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1248:28:39;1289:44;1308:3;1313:10;1325:7;1289:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1044:294;;:::o;990:213:38:-;1064:4;1745:15;;;;;;;;;;;1744:16;:40;;;;;1778:6;;;;;;;;;;;1764:20;;:10;:20;;;1744:40;1736:49;;;;;;;;1085:19;1096:7;1085:6;;:10;;:19;;;;:::i;:::-;1076:6;:28;;;;1126:26;1144:7;1126:8;:13;1135:3;1126:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;1110:8;:13;1119:3;1110:13;;;;;;;;;;;;;;;:42;;;;1168:3;1163:18;;;1173:7;1163:18;;;;;;;;;;;;;;;;;;1194:4;1187:11;;990:213;;;;:::o;3215:99:39:-;3271:7;3293:8;:16;3302:6;3293:16;;;;;;;;;;;;;;;;3286:23;;3215:99;;;:::o;1255:136:38:-;1310:4;1745:15;;;;;;;;;;;1744:16;:40;;;;;1778:6;;;;;;;;;;;1764:20;;:10;:20;;;1744:40;1736:49;;;;;;;;1340:4;1322:15;;:22;;;;;;;;;;;;;;;;;;1355:14;;;;;;;;;;1382:4;1375:11;;1255:136;:::o;830:25:39:-;;;;:::o;2965:165::-;3035:4;3057:67;795:4;3057:48;3082:15;:22;3098:5;3082:22;;;;;;;;;;;;;;;;3057:20;3071:5;3057:13;:20::i;:::-;:24;;:48;;;;:::i;:::-;:52;;:67;;;;:::i;:::-;3049:76;;2965:165;;;:::o;1795:234::-;1864:59;1882:40;1915:6;;1882:28;795:4;1882:9;:13;;:28;;;;:::i;:::-;:32;;:40;;;;:::i;:::-;1864:13;;:17;;:59;;;;:::i;:::-;1848:13;:75;;;;1945:26;1961:9;1945:11;;:15;;:26;;;;:::i;:::-;1931:11;:40;;;;2002:10;1984:40;;;2014:9;1984:40;;;;;;;;;;;;;;;;;;1795:234::o;860:48::-;;;;;;;;;;;;;;;;;:::o;912:54::-;;;;;;;;;;;;;;;;;:::o;2649:221::-;2714:4;2728:28;2759:47;2777:21;:28;2799:5;2777:28;;;;;;;;;;;;;;;;2759:13;;:17;;:47;;;;:::i;:::-;2728:78;;2821:44;2849:8;:15;2858:5;2849:15;;;;;;;;;;;;;;;;2821:23;:27;;:44;;;;:::i;:::-;2814:51;;2649:221;;;;:::o;935:110:25:-;993:7;1020:1;1015;:6;;1008:14;;;;;;1039:1;1035;:5;1028:12;;935:110;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport '../../math/SafeMath.sol';\nimport './StandardDistribution.sol';\n\n\n\n// @title Non-Transferable ERC20 token contract with shared revenue distribution functionality.\n// @notice This token contract can receive payments in the fallback function and token owners can withdraw their share\n// @author Kyle Dewhurst, MyBitFoundation\n// Credit goes to Nick Johnson for the dividend token https://medium.com/@weka/dividend-bearing-tokens-on-ethereum-42d01c710657\ncontract MintableDistribution is StandardDistribution{\n  using SafeMath for uint;\n\n  bool public mintingFinished = false;\n  address public minter;\n\n  // @notice constructor: initialized\n  constructor(string _tokenURI, address _minter)\n  public {\n      tokenURI = _tokenURI;                         // Set the id for reference\n      minter = _minter;\n  }\n\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount)\n  public\n  canMint\n  returns (bool) {\n    supply = supply.add(_amount);\n    balances[_to] = balances[_to].add(_amount);\n    emit Mint(_to, _amount);\n    return true;\n  }\n\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting()\n  public\n  canMint\n  returns (bool) {\n    mintingFinished = true;\n    emit MintFinished();\n    return true;\n  }\n\n  // ------------------------------------------------------------------------------------------------\n  //                                   Modifiers\n  // ------------------------------------------------------------------------------------------------\n\n\n  // @notice modifier: Requires that minting hasn't finished\n  modifier canMint() {\n    require(!mintingFinished && msg.sender == minter);\n    _;\n  }\n\n\n  // ------------------------------------------------------------------------------------------------\n  //                                     Events\n  // ------------------------------------------------------------------------------------------------\n\n  event Mint(address indexed to, uint256 amount);\n  event MintFinished();\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
    "exportedSymbols": {
      "MintableDistribution": [
        10191
      ]
    },
    "id": 10192,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10086,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:38"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10087,
        "nodeType": "ImportDirective",
        "scope": 10192,
        "sourceUnit": 6331,
        "src": "25:33:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 10088,
        "nodeType": "ImportDirective",
        "scope": 10192,
        "sourceUnit": 10434,
        "src": "59:36:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10089,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10433,
              "src": "517:20:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$10433",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 10090,
            "nodeType": "InheritanceSpecifier",
            "src": "517:20:38"
          }
        ],
        "contractDependencies": [
          10433
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10191,
        "linearizedBaseContracts": [
          10191,
          10433
        ],
        "name": "MintableDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10093,
            "libraryName": {
              "contractScope": null,
              "id": 10091,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "547:8:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "541:24:38",
            "typeName": {
              "id": 10092,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "560:4:38",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10096,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 10191,
            "src": "569:35:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 10094,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "569:4:38",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 10095,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "599:5:38",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10098,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 10191,
            "src": "608:21:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10097,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "608:7:38",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10113,
              "nodeType": "Block",
              "src": "728:109:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10105,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10206,
                      "src": "736:8:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10106,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10100,
                      "src": "747:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "736:20:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 10108,
                  "nodeType": "ExpressionStatement",
                  "src": "736:20:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10109,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10098,
                      "src": "816:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10110,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10102,
                      "src": "825:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "816:16:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10112,
                  "nodeType": "ExpressionStatement",
                  "src": "816:16:38"
                }
              ]
            },
            "documentation": null,
            "id": 10114,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10100,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10114,
                  "src": "684:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "684:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10102,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 10114,
                  "src": "702:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "683:35:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "728:0:38"
            },
            "scope": 10191,
            "src": "672:165:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10150,
              "nodeType": "Block",
              "src": "1070:133:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10125,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10200,
                      "src": "1076:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10128,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10118,
                          "src": "1096:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10126,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10200,
                          "src": "1085:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1085:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1085:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1076:28:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10131,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:28:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10132,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10204,
                        "src": "1110:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10134,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10133,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10116,
                        "src": "1119:3:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1110:13:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10139,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10118,
                          "src": "1144:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10135,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10204,
                            "src": "1126:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10137,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10136,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10116,
                            "src": "1135:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1126:13:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1126:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1126:26:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1110:42:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10142,
                  "nodeType": "ExpressionStatement",
                  "src": "1110:42:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10144,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10116,
                        "src": "1168:3:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10145,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10118,
                        "src": "1173:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10143,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10188,
                      "src": "1163:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1163:18:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10147,
                  "nodeType": "EmitStatement",
                  "src": "1158:23:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1194:4:38",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10124,
                  "id": 10149,
                  "nodeType": "Return",
                  "src": "1187:11:38"
                }
              ]
            },
            "documentation": null,
            "id": 10151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10121,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10120,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10182,
                  "src": "1045:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1045:7:38"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10116,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1004:11:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10118,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1017:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:30:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10123,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1064:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10122,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:38"
            },
            "scope": 10191,
            "src": "990:213:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10167,
              "nodeType": "Block",
              "src": "1316:75:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10158,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10096,
                      "src": "1322:15:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 10159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1340:4:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1322:22:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10161,
                  "nodeType": "ExpressionStatement",
                  "src": "1322:22:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10162,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10190,
                      "src": "1355:12:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1355:14:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10164,
                  "nodeType": "EmitStatement",
                  "src": "1350:19:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1382:4:38",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10157,
                  "id": 10166,
                  "nodeType": "Return",
                  "src": "1375:11:38"
                }
              ]
            },
            "documentation": null,
            "id": 10168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10154,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10153,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10182,
                  "src": "1291:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1291:7:38"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1277:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10156,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10168,
                  "src": "1310:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10155,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1310:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1309:6:38"
            },
            "scope": 10191,
            "src": "1255:136:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10181,
              "nodeType": "Block",
              "src": "1730:67:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 10172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1744:16:38",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 10171,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10096,
                            "src": "1745:15:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1764:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1764:10:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 10175,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10098,
                            "src": "1778:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1764:20:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1744:40:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10170,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "1736:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1736:49:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10179,
                  "nodeType": "ExpressionStatement",
                  "src": "1736:49:38"
                },
                {
                  "id": 10180,
                  "nodeType": "PlaceholderStatement",
                  "src": "1791:1:38"
                }
              ]
            },
            "documentation": null,
            "id": 10182,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10169,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:2:38"
            },
            "src": "1711:86:38",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10188,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10184,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10188,
                  "src": "2066:18:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2066:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10186,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10188,
                  "src": "2086:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2065:36:38"
            },
            "src": "2055:47:38"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10190,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2123:2:38"
            },
            "src": "2105:21:38"
          }
        ],
        "scope": 10192,
        "src": "484:1645:38"
      }
    ],
    "src": "0:2130:38"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/MintableDistribution.sol",
    "exportedSymbols": {
      "MintableDistribution": [
        10191
      ]
    },
    "id": 10192,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10086,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:38"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 10087,
        "nodeType": "ImportDirective",
        "scope": 10192,
        "sourceUnit": 6331,
        "src": "25:33:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/distribution/StandardDistribution.sol",
        "file": "./StandardDistribution.sol",
        "id": 10088,
        "nodeType": "ImportDirective",
        "scope": 10192,
        "sourceUnit": 10434,
        "src": "59:36:38",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10089,
              "name": "StandardDistribution",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10433,
              "src": "517:20:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_StandardDistribution_$10433",
                "typeString": "contract StandardDistribution"
              }
            },
            "id": 10090,
            "nodeType": "InheritanceSpecifier",
            "src": "517:20:38"
          }
        ],
        "contractDependencies": [
          10433
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 10191,
        "linearizedBaseContracts": [
          10191,
          10433
        ],
        "name": "MintableDistribution",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 10093,
            "libraryName": {
              "contractScope": null,
              "id": 10091,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6330,
              "src": "547:8:38",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6330",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "541:24:38",
            "typeName": {
              "id": 10092,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "560:4:38",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 10096,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 10191,
            "src": "569:35:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 10094,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "569:4:38",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 10095,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "599:5:38",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 10098,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 10191,
            "src": "608:21:38",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 10097,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "608:7:38",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10113,
              "nodeType": "Block",
              "src": "728:109:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10105,
                      "name": "tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10206,
                      "src": "736:8:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10106,
                      "name": "_tokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10100,
                      "src": "747:9:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "736:20:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 10108,
                  "nodeType": "ExpressionStatement",
                  "src": "736:20:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10109,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10098,
                      "src": "816:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10110,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10102,
                      "src": "825:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "816:16:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10112,
                  "nodeType": "ExpressionStatement",
                  "src": "816:16:38"
                }
              ]
            },
            "documentation": null,
            "id": 10114,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10103,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10100,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 10114,
                  "src": "684:16:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10099,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "684:6:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10102,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 10114,
                  "src": "702:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "702:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "683:35:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10104,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "728:0:38"
            },
            "scope": 10191,
            "src": "672:165:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10150,
              "nodeType": "Block",
              "src": "1070:133:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10125,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10200,
                      "src": "1076:6:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10128,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10118,
                          "src": "1096:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 10126,
                          "name": "supply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10200,
                          "src": "1085:6:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1085:10:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10129,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1085:19:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1076:28:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10131,
                  "nodeType": "ExpressionStatement",
                  "src": "1076:28:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10132,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10204,
                        "src": "1110:8:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 10134,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10133,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10116,
                        "src": "1119:3:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1110:13:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 10139,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10118,
                          "src": "1144:7:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 10135,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10204,
                            "src": "1126:8:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 10137,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10136,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10116,
                            "src": "1135:3:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1126:13:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 10138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6311,
                        "src": "1126:17:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 10140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1126:26:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1110:42:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10142,
                  "nodeType": "ExpressionStatement",
                  "src": "1110:42:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10144,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10116,
                        "src": "1168:3:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 10145,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10118,
                        "src": "1173:7:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 10143,
                      "name": "Mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10188,
                      "src": "1163:4:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 10146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1163:18:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10147,
                  "nodeType": "EmitStatement",
                  "src": "1158:23:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1194:4:38",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10124,
                  "id": 10149,
                  "nodeType": "Return",
                  "src": "1187:11:38"
                }
              ]
            },
            "documentation": null,
            "id": 10151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10121,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10120,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10182,
                  "src": "1045:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1045:7:38"
              }
            ],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10116,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1004:11:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1004:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10118,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1017:15:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1017:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1003:30:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10123,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10151,
                  "src": "1064:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10122,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:38"
            },
            "scope": 10191,
            "src": "990:213:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10167,
              "nodeType": "Block",
              "src": "1316:75:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10158,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10096,
                      "src": "1322:15:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 10159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1340:4:38",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1322:22:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10161,
                  "nodeType": "ExpressionStatement",
                  "src": "1322:22:38"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 10162,
                      "name": "MintFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10190,
                      "src": "1355:12:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 10163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1355:14:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10164,
                  "nodeType": "EmitStatement",
                  "src": "1350:19:38"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 10165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1382:4:38",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 10157,
                  "id": 10166,
                  "nodeType": "Return",
                  "src": "1375:11:38"
                }
              ]
            },
            "documentation": null,
            "id": 10168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 10154,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 10153,
                  "name": "canMint",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10182,
                  "src": "1291:7:38",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1291:7:38"
              }
            ],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1277:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10156,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10168,
                  "src": "1310:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10155,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1310:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1309:6:38"
            },
            "scope": 10191,
            "src": "1255:136:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10181,
              "nodeType": "Block",
              "src": "1730:67:38",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 10177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 10172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1744:16:38",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 10171,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10096,
                            "src": "1745:15:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 10176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 10173,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12464,
                              "src": "1764:3:38",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 10174,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1764:10:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 10175,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10098,
                            "src": "1778:6:38",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1764:20:38",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1744:40:38",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 10170,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "1736:7:38",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 10178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1736:49:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 10179,
                  "nodeType": "ExpressionStatement",
                  "src": "1736:49:38"
                },
                {
                  "id": 10180,
                  "nodeType": "PlaceholderStatement",
                  "src": "1791:1:38"
                }
              ]
            },
            "documentation": null,
            "id": 10182,
            "name": "canMint",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 10169,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1727:2:38"
            },
            "src": "1711:86:38",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10188,
            "name": "Mint",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10187,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10184,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10188,
                  "src": "2066:18:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2066:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10186,
                  "indexed": false,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 10188,
                  "src": "2086:14:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10185,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2086:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2065:36:38"
            },
            "src": "2055:47:38"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10190,
            "name": "MintFinished",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10189,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2123:2:38"
            },
            "src": "2105:21:38"
          }
        ],
        "scope": 10192,
        "src": "484:1645:38"
      }
    ],
    "src": "0:2130:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.518Z"
}