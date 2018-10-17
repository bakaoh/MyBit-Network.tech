"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = exports.Events = 
{
  "contractName": "Events",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "database",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "LogFavoriteNumberAdded",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_number",
          "type": "uint256"
        }
      ],
      "name": "numberStored",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061035a806100206000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063643c070114610051578063713b563f1461009e575b600080fd5b34801561005d57600080fd5b5061009c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100f5565b005b3480156100aa57600080fd5b506100b3610309565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f636f6e74726163740000000000000000000000000000000000000000000000008152506008018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156101ea57805182526020820191506020810190506020830392506101c5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561027157600080fd5b505af1158015610285573d6000803e3d6000fd5b505050506040513d602081101561029b57600080fd5b810190808051906020019092919050505015156102b757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff167fbe9a6e537c43fec92f3512fb7fe2eb3c6ab21418cbd47f21daad78b5b97a31db826040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582085d8cbba470ae958cef4a426c6fcbdbc87af36ac11b2828e1720fee5f8bfc38b0029",
  "deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063643c070114610051578063713b563f1461009e575b600080fd5b34801561005d57600080fd5b5061009c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506100f5565b005b3480156100aa57600080fd5b506100b3610309565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633b7bfda03360405160200180807f636f6e74726163740000000000000000000000000000000000000000000000008152506008018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831015156101ea57805182526020820191506020810190506020830392506101c5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561027157600080fd5b505af1158015610285573d6000803e3d6000fd5b505050506040513d602081101561029b57600080fd5b810190808051906020019092919050505015156102b757600080fd5b8173ffffffffffffffffffffffffffffffffffffffff167fbe9a6e537c43fec92f3512fb7fe2eb3c6ab21418cbd47f21daad78b5b97a31db826040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582085d8cbba470ae958cef4a426c6fcbdbc87af36ac11b2828e1720fee5f8bfc38b0029",
  "sourceMap": "51:725:10:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;51:725:10;;;;;;;",
  "deployedSourceMap": "51:725:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;158:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;158:145:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;71:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;71:24:10;;;;;;;;;;;;;;;;;;;;;;;;;;;158:145;685:8;;;;;;;;;;;:20;;;745:10;716:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;716:40:10;;;706:51;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;51:19;36:153;;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;706:51:10;;;;;;;;;;;;;;;;685:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;685:73:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;685:73:10;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;685:73:10;;;;;;;;;;;;;;;;677:82;;;;;;;;281:7;258:40;;;290:7;258:40;;;;;;;;;;;;;;;;;;158:145;;:::o;71:24::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport './Database.sol';\n\ncontract Events {\n  Database public database;\n  // @dev This will emit the event from the Event contract\n  function numberStored(address _sender, uint _number)\n  external\n  onlyApprovedContract {\n      emit LogFavoriteNumberAdded(_sender, _number);\n  }\n\n  event LogFavoriteNumberAdded(address indexed _sender, uint _number);\n\n\n  // --------------------------------------------------------------------------------------\n  // Caller must be registered as a contract through ContractManager.sol\n  // --------------------------------------------------------------------------------------\n  modifier onlyApprovedContract() {\n      require(database.boolStorage(keccak256(abi.encodePacked(\"contract\", msg.sender))));\n      _;\n  }\n\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
    "exportedSymbols": {
      "Events": [
        4066
      ]
    },
    "id": 4067,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4023,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:10"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "./Database.sol",
        "id": 4024,
        "nodeType": "ImportDirective",
        "scope": 4067,
        "sourceUnit": 4022,
        "src": "25:24:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 4066,
        "linearizedBaseContracts": [
          4066
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4026,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 4066,
            "src": "71:24:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 4025,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "71:8:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4040,
              "nodeType": "Block",
              "src": "245:58:10",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4036,
                        "name": "_sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4028,
                        "src": "281:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4037,
                        "name": "_number",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4030,
                        "src": "290:7:10",
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
                      "id": 4035,
                      "name": "LogFavoriteNumberAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4047,
                      "src": "258:22:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 4038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "258:40:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4039,
                  "nodeType": "EmitStatement",
                  "src": "253:45:10"
                }
              ]
            },
            "documentation": null,
            "id": 4041,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4033,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4032,
                  "name": "onlyApprovedContract",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4065,
                  "src": "224:20:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "224:20:10"
              }
            ],
            "name": "numberStored",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4028,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4041,
                  "src": "180:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4027,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:7:10",
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
                  "id": 4030,
                  "name": "_number",
                  "nodeType": "VariableDeclaration",
                  "scope": 4041,
                  "src": "197:12:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4029,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:31:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 4034,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "245:0:10"
            },
            "scope": 4066,
            "src": "158:145:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4047,
            "name": "LogFavoriteNumberAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4043,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4047,
                  "src": "336:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "336:7:10",
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
                  "id": 4045,
                  "indexed": false,
                  "name": "_number",
                  "nodeType": "VariableDeclaration",
                  "scope": 4047,
                  "src": "361:12:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4044,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:39:10"
            },
            "src": "307:68:10"
          },
          {
            "body": {
              "id": 4064,
              "nodeType": "Block",
              "src": "669:104:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 4055,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "733:10:10",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4056,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 12464,
                                      "src": "745:3:10",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4057,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "745:10:10",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4053,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12451,
                                    "src": "716:3:10",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4054,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "716:16:10",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4058,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "716:40:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4052,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12458,
                              "src": "706:9:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "706:51:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4050,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4026,
                            "src": "685:8:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4021",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 4051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3661,
                          "src": "685:20:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "685:73:10",
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
                      "id": 4049,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "677:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "677:82:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4062,
                  "nodeType": "ExpressionStatement",
                  "src": "677:82:10"
                },
                {
                  "id": 4063,
                  "nodeType": "PlaceholderStatement",
                  "src": "767:1:10"
                }
              ]
            },
            "documentation": null,
            "id": 4065,
            "name": "onlyApprovedContract",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 4048,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "666:2:10"
            },
            "src": "637:136:10",
            "visibility": "internal"
          }
        ],
        "scope": 4067,
        "src": "51:725:10"
      }
    ],
    "src": "0:777:10"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Events.sol",
    "exportedSymbols": {
      "Events": [
        4066
      ]
    },
    "id": 4067,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4023,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:10"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/database/Database.sol",
        "file": "./Database.sol",
        "id": 4024,
        "nodeType": "ImportDirective",
        "scope": 4067,
        "sourceUnit": 4022,
        "src": "25:24:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 4066,
        "linearizedBaseContracts": [
          4066
        ],
        "name": "Events",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4026,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 4066,
            "src": "71:24:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Database_$4021",
              "typeString": "contract Database"
            },
            "typeName": {
              "contractScope": null,
              "id": 4025,
              "name": "Database",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4021,
              "src": "71:8:10",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Database_$4021",
                "typeString": "contract Database"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4040,
              "nodeType": "Block",
              "src": "245:58:10",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4036,
                        "name": "_sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4028,
                        "src": "281:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4037,
                        "name": "_number",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4030,
                        "src": "290:7:10",
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
                      "id": 4035,
                      "name": "LogFavoriteNumberAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4047,
                      "src": "258:22:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 4038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "258:40:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4039,
                  "nodeType": "EmitStatement",
                  "src": "253:45:10"
                }
              ]
            },
            "documentation": null,
            "id": 4041,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4033,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4032,
                  "name": "onlyApprovedContract",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4065,
                  "src": "224:20:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "224:20:10"
              }
            ],
            "name": "numberStored",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4028,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4041,
                  "src": "180:15:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4027,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:7:10",
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
                  "id": 4030,
                  "name": "_number",
                  "nodeType": "VariableDeclaration",
                  "scope": 4041,
                  "src": "197:12:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4029,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:31:10"
            },
            "payable": false,
            "returnParameters": {
              "id": 4034,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "245:0:10"
            },
            "scope": 4066,
            "src": "158:145:10",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 4047,
            "name": "LogFavoriteNumberAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 4046,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4043,
                  "indexed": true,
                  "name": "_sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 4047,
                  "src": "336:23:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "336:7:10",
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
                  "id": 4045,
                  "indexed": false,
                  "name": "_number",
                  "nodeType": "VariableDeclaration",
                  "scope": 4047,
                  "src": "361:12:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4044,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "335:39:10"
            },
            "src": "307:68:10"
          },
          {
            "body": {
              "id": 4064,
              "nodeType": "Block",
              "src": "669:104:10",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 4055,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "733:10:10",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 4056,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 12464,
                                      "src": "745:3:10",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 4057,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "745:10:10",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 4053,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 12451,
                                    "src": "716:3:10",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 4054,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "716:16:10",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 4058,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "716:40:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 4052,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12458,
                              "src": "706:9:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 4059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "706:51:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4050,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4026,
                            "src": "685:8:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Database_$4021",
                              "typeString": "contract Database"
                            }
                          },
                          "id": 4051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3661,
                          "src": "685:20:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 4060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "685:73:10",
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
                      "id": 4049,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        12467,
                        12468
                      ],
                      "referencedDeclaration": 12467,
                      "src": "677:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4061,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "677:82:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4062,
                  "nodeType": "ExpressionStatement",
                  "src": "677:82:10"
                },
                {
                  "id": 4063,
                  "nodeType": "PlaceholderStatement",
                  "src": "767:1:10"
                }
              ]
            },
            "documentation": null,
            "id": 4065,
            "name": "onlyApprovedContract",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 4048,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "666:2:10"
            },
            "src": "637:136:10",
            "visibility": "internal"
          }
        ],
        "scope": 4067,
        "src": "51:725:10"
      }
    ],
    "src": "0:777:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.417Z"
}