"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SendPayment = exports.SendPayment = 
{
  "contractName": "SendPayment",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "receiveEthPayment",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "bytes32"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "receiveTokenPayment",
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
  "source": "pragma solidity ^0.4.24;\n\n// @notice allows contract to call a basic withdraw() function taking no parameters on another contract\ninterface SendPayment {\n\n  function receiveEthPayment(bytes32 _id) \n  external  \n  payable\n  returns (bool);\n\n  function receiveTokenPayment(bytes32 _id, uint _amount) \n  external  \n  returns (bool);\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/SendPayment.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/SendPayment.sol",
    "exportedSymbols": {
      "SendPayment": [
        2625
      ]
    },
    "id": 2626,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2608,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2625,
        "linearizedBaseContracts": [
          2625
        ],
        "name": "SendPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2615,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveEthPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2610,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 2615,
                  "src": "184:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2609,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "183:13:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 2614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2613,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2615,
                  "src": "232:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2612,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:6:15"
            },
            "scope": 2625,
            "src": "157:81:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveTokenPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2617,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "271:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2616,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2619,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "284:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2618,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "270:27:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "323:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2621,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "322:6:15"
            },
            "scope": 2625,
            "src": "242:87:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2626,
        "src": "130:202:15"
      }
    ],
    "src": "0:333:15"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/SendPayment.sol",
    "exportedSymbols": {
      "SendPayment": [
        2625
      ]
    },
    "id": 2626,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2608,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:15"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 2625,
        "linearizedBaseContracts": [
          2625
        ],
        "name": "SendPayment",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 2615,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveEthPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2611,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2610,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 2615,
                  "src": "184:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2609,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "183:13:15"
            },
            "payable": true,
            "returnParameters": {
              "id": 2614,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2613,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2615,
                  "src": "232:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2612,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "231:6:15"
            },
            "scope": 2625,
            "src": "157:81:15",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 2624,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "receiveTokenPayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2620,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2617,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "271:11:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 2616,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "271:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2619,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "284:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2618,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "284:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "270:27:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 2623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2622,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 2624,
                  "src": "323:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2621,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "323:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "322:6:15"
            },
            "scope": 2625,
            "src": "242:87:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 2626,
        "src": "130:202:15"
      }
    ],
    "src": "0:333:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-09-11T15:13:26.054Z"
}