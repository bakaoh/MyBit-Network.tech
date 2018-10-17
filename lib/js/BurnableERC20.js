"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnableERC20 = exports.BurnableERC20 = 
{
  "contractName": "BurnableERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenOwner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
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
          "name": "_tokenHolder",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "name": "_who",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
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
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\n// @title An interface to interact with Burnable ERC20 tokens \ninterface BurnableERC20 { \n\n  function allowance(address tokenOwner, address spender) external view returns (uint remaining);\n  \n  function burnFrom(address _tokenHolder, uint _amount) external returns (bool success); \n\n  function burn(uint _amount) external returns (bool success); \n  \n  function totalSupply() external view returns (uint256);\n\n  function balanceOf(address _who) external view returns (uint256);\n\n  function transfer(address _to, uint256 _value) external returns (bool);\n\n  function approve(address _spender, uint256 _value) external returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _value) external returns (bool);\n\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n\n  event LogBurn(address indexed _spender, uint256 _value); \n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        5776
      ]
    },
    "id": 5777,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5687,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5776,
        "linearizedBaseContracts": [
          5776
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5696,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5689,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "138:18:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5688,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:17",
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
                  "id": 5691,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "158:15:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5694,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "198:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5693,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:17"
            },
            "scope": 5776,
            "src": "119:95:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5705,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5698,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "238:20:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:17",
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
                  "id": 5700,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "260:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5699,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5703,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "292:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5702,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:17"
            },
            "scope": 5776,
            "src": "220:86:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5707,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5712,
                  "src": "325:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5710,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5712,
                  "src": "357:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5709,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:17"
            },
            "scope": 5776,
            "src": "311:60:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5717,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5717,
                  "src": "424:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:17"
            },
            "scope": 5776,
            "src": "378:55:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5724,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5719,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 5724,
                  "src": "456:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5724,
                  "src": "493:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:17"
            },
            "scope": 5776,
            "src": "437:65:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5733,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5726,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "524:11:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5725,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:17",
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
                  "id": 5728,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "537:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5731,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "571:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5730,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:17"
            },
            "scope": 5776,
            "src": "506:71:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5742,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5735,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "598:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5734,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:17",
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
                  "id": 5737,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "616:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "650:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:17"
            },
            "scope": 5776,
            "src": "581:75:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5753,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5744,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "682:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:17",
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
                  "id": 5746,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "697:11:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:17",
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
                  "id": 5748,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "710:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "744:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5750,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:17"
            },
            "scope": 5776,
            "src": "660:90:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5761,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5755,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "769:20:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:17",
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
                  "id": 5757,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "791:18:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:17",
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
                  "id": 5759,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "811:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:17"
            },
            "src": "754:72:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5769,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5763,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "845:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5762,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:17",
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
                  "id": 5765,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "868:23:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:17",
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
                  "id": 5767,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "893:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:17"
            },
            "src": "830:78:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5775,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5771,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "926:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:17",
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
                  "id": 5773,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "952:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:17"
            },
            "src": "912:56:17"
          }
        ],
        "scope": 5777,
        "src": "89:882:17"
      }
    ],
    "src": "0:972:17"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/BurnableERC20.sol",
    "exportedSymbols": {
      "BurnableERC20": [
        5776
      ]
    },
    "id": 5777,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5687,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 5776,
        "linearizedBaseContracts": [
          5776
        ],
        "name": "BurnableERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 5696,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5689,
                  "name": "tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "138:18:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5688,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:7:17",
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
                  "id": 5691,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "158:15:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:37:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5694,
                  "name": "remaining",
                  "nodeType": "VariableDeclaration",
                  "scope": 5696,
                  "src": "198:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5693,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:16:17"
            },
            "scope": 5776,
            "src": "119:95:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5705,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5698,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "238:20:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:17",
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
                  "id": 5700,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "260:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5699,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "237:36:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5704,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5703,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5705,
                  "src": "292:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5702,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "292:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "291:14:17"
            },
            "scope": 5776,
            "src": "220:86:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5712,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5707,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5712,
                  "src": "325:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5706,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "325:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "324:14:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5710,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5712,
                  "src": "357:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5709,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "357:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "356:14:17"
            },
            "scope": 5776,
            "src": "311:60:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5717,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "398:2:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5717,
                  "src": "424:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:9:17"
            },
            "scope": 5776,
            "src": "378:55:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5724,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5719,
                  "name": "_who",
                  "nodeType": "VariableDeclaration",
                  "scope": 5724,
                  "src": "456:12:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "456:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "455:14:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5724,
                  "src": "493:7:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "493:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "492:9:17"
            },
            "scope": 5776,
            "src": "437:65:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5733,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5726,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "524:11:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5725,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "524:7:17",
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
                  "id": 5728,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "537:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "537:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "523:29:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5731,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5733,
                  "src": "571:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5730,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "571:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "570:6:17"
            },
            "scope": 5776,
            "src": "506:71:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5742,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5735,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "598:16:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5734,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:7:17",
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
                  "id": 5737,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "616:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "597:34:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5742,
                  "src": "650:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5739,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "650:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "649:6:17"
            },
            "scope": 5776,
            "src": "581:75:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 5753,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5744,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "682:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:7:17",
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
                  "id": 5746,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "697:11:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5745,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:17",
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
                  "id": 5748,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "710:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "710:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "681:44:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 5752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5753,
                  "src": "744:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5750,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "744:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "743:6:17"
            },
            "scope": 5776,
            "src": "660:90:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5761,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5755,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "769:20:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "769:7:17",
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
                  "id": 5757,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "791:18:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:17",
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
                  "id": 5759,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5761,
                  "src": "811:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "768:57:17"
            },
            "src": "754:72:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5769,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5763,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "845:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5762,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:17",
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
                  "id": 5765,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "868:23:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "868:7:17",
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
                  "id": 5767,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "893:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "893:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:63:17"
            },
            "src": "830:78:17"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5775,
            "name": "LogBurn",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5771,
                  "indexed": true,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "926:24:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "926:7:17",
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
                  "id": 5773,
                  "indexed": false,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5775,
                  "src": "952:14:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "952:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "925:42:17"
            },
            "src": "912:56:17"
          }
        ],
        "scope": 5777,
        "src": "89:882:17"
      }
    ],
    "src": "0:972:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.443Z"
}