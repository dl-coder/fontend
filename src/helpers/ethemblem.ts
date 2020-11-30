export const ethemblem = {
  "contractName": "ethemblem",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
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
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "internalType": "address",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
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
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
          "internalType": "uint256",
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
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddress",
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
      "constant": false,
      "inputs": [],
      "name": "withdrawETH",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "f",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"f\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newAddress\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdrawETH\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"return\":\"uint256 representing the amount owned by the passed address\"},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"return\":\"address currently approved for the given token ID\"},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"name()\":{\"details\":\"Gets the token name.\",\"return\":\"string representing the token name\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"return\":\"address currently marked as the owner of the given token ID\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See `IERC165.supportsInterface`.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Gets the token symbol.\",\"return\":\"string representing the token symbol\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"tokenURI(uint256)\":{\"details\":\"Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query\"}},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"return\":\"uint256 representing the total amount of tokens\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use `safeTransferFrom` whenever possible. Requires the msg.sender to be the owner, approved, or operator.\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ethemblem.sol\":\"ethemblem\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ERC721Full.sol\":{\"keccak256\":\"0x2c9428b26856816aabc93836bad491818b513ebb65e79dd96b78f994bbce3c6f\",\"urls\":[\"bzz-raw://df88a09cdb67f443c89908d0b1ec154f6e5a4b0b2177580d9d2eae8d0e3d9cf1\",\"dweb:/ipfs/QmWaaSeg35RuBMD2vDnTggkjfTZbgFzupQoCWHgSpC3T8U\"]},\"/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ethemblem.sol\":{\"keccak256\":\"0x5911fda8f45e3358e5ef723e7d557531a97c61f1eba0404fa5c95ba41c5fd3e9\",\"urls\":[\"bzz-raw://4c42fca6cf1b0e977cc874ccac12c15b682ec68b52e0a772cb4a6cd4c41f8661\",\"dweb:/ipfs/QmXcgMwS6a1Yy6ggsJ1XmeTi4RHCTbpc6BM4bg1sSuU7BE\"]}},\"version\":1}",
  "bytecode": "0x60806040526000600d553480156200001657600080fd5b506040518060400160405280600981526020017f457468656d626c656d00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f455445000000000000000000000000000000000000000000000000000000000081525081816200009d6301ffc9a760e01b6200016260201b60201c565b620000b56380ac58cd60e01b6200016260201b60201c565b620000cd63780e9d6360e01b6200016260201b60201c565b8160099080519060200190620000e59291906200026b565b5080600a9080519060200190620000fe9291906200026b565b5062000117635b5e139f60e01b6200016260201b60201c565b5050505033600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200031a565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ae57805160ff1916838001178555620002df565b82800160010185558215620002df579182015b82811115620002de578251825591602001919060010190620002c1565b5b509050620002ee9190620002f2565b5090565b6200031791905b8082111562000313576000816000905550600101620002f9565b5090565b90565b6126e8806200032a6000396000f3fe60806040526004361061011f5760003560e01c806370a08231116100a0578063b88d4fde11610064578063b88d4fde1461074d578063c87b56dd1461085f578063e086e5ec14610913578063e985e9c51461092a578063f2fde38b146109b35761011f565b806370a08231146105565780638da5cb5b146105bb57806394bf804d1461061257806395d89b4114610660578063a22cb465146106f05761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a04565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610b0d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ba8565b005b34801561030857600080fd5b50610311610d81565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d8e565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dfd565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ebc565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610edc565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610f5c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b506105a56004803603602081101561057957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611024565b6040518082815260200191505060405180910390f35b3480156105c757600080fd5b506105d06110f9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61065e6004803603604081101561062857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061111f565b005b34801561066c57600080fd5b506106756111e7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106b557808201518184015260208101905061069a565b50505050905090810190601f1680156106e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106fc57600080fd5b5061074b6004803603604081101561071357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611289565b005b34801561075957600080fd5b5061085d6004803603608081101561077057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107d757600080fd5b8201836020820111156107e957600080fd5b8035906020019184600183028401116401000000008311171561080b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061142c565b005b34801561086b57600080fd5b506108986004803603602081101561088257600080fd5b810190808035906020019092919050505061149e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108d85780820151818401526020810190506108bd565b50505050905090810190601f1680156109055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561091f57600080fd5b506109286115b1565b005b34801561093657600080fd5b506109996004803603604081101561094d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061169d565b604051808215151515815260200191505060405180910390f35b3480156109bf57600080fd5b50610a02600480360360208110156109d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611731565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b035780601f10610ad857610100808354040283529160200191610b03565b820191906000526020600020905b815481529060010190602001808311610ae657829003601f168201915b5050505050905090565b6000610b18826117cf565b610b6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806125b2602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610bb382610f5c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806126366021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c7a5750610c79813361169d565b5b610ccf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806125276038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610d983382611841565b610ded576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806126576031913960400191505060405180910390fd5b610df8838383611935565b505050565b6000610e0883611024565b8210610e5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061247a602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610ea957fe5b9060005260206000200154905092915050565b610ed78383836040518060200160405280600081525061142c565b505050565b6000610ee6610d81565b8210610f3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612688602c913960400191505060405180910390fd5b60078281548110610f4a57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561101b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806125896029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061255f602a913960400191505060405180910390fd5b6110f2600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611959565b9050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082148061112e5750600182145b61113757600080fd5b600082141561115657670de0b6b3a764000034101561115557600080fd5b5b60018214156111745766b1a2bc2ec5000034101561117357600080fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111c8576111c333600d600081548092919060010191905055611967565b6111e3565b6111e281600d600081548092919060010191905055611967565b5b5050565b6060600a8054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127f5780601f106112545761010080835404028352916020019161127f565b820191906000526020600020905b81548152906001019060200180831161126257829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561132b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611437848484610d8e565b61144384848484611988565b611498576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806124a56032913960400191505060405180910390fd5b50505050565b60606114a9826117cf565b6114fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612607602f913960400191505060405180910390fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a55780601f1061157a576101008083540402835291602001916115a5565b820191906000526020600020905b81548152906001019060200180831161158857829003601f168201915b50505050509050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461160b57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461166557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461178b57600080fd5b80600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061184c826117cf565b6118a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806124fb602c913960400191505060405180910390fd5b60006118ac83610f5c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061191b57508373ffffffffffffffffffffffffffffffffffffffff1661190384610b0d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061192c575061192b818561169d565b5b91505092915050565b611940838383611b71565b61194a8382611dcc565b6119548282611f6a565b505050565b600081600001549050919050565b6119718282612031565b61197b8282611f6a565b61198481612249565b5050565b60006119a98473ffffffffffffffffffffffffffffffffffffffff16612295565b6119b65760019050611b69565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a91578082015181840152602081019050611a76565b50505050905090810190601f168015611abe5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611ae057600080fd5b505af1158015611af4573d6000803e3d6000fd5b505050506040513d6020811015611b0a57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16611b9182610f5c565b73ffffffffffffffffffffffffffffffffffffffff1614611bfd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806125de6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c83576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124d76024913960400191505060405180910390fd5b611c8c816122a8565b611cd3600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612366565b611d1a600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612389565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611e246001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061239f90919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114611f11576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611e9157fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611ee957fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611f639190612428565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156120d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6120dd816117cf565b15612150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121e9600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612389565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146123635760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b61237e6001826000015461239f90919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600082821115612417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b81548183558181111561244f5781836000526020600020918201910161244e9190612454565b5b505050565b61247691905b8082111561247257600081600090555060010161245a565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582037a8a45f5dc2a924857bd1924ce3d2a3756bae815f546daa6a27eec7a2c4be9764736f6c63430005100032",
  "deployedBytecode": "0x60806040526004361061011f5760003560e01c806370a08231116100a0578063b88d4fde11610064578063b88d4fde1461074d578063c87b56dd1461085f578063e086e5ec14610913578063e985e9c51461092a578063f2fde38b146109b35761011f565b806370a08231146105565780638da5cb5b146105bb57806394bf804d1461061257806395d89b4114610660578063a22cb465146106f05761011f565b806323b872dd116100e757806323b872dd146103275780632f745c59146103a257806342842e0e146104115780634f6ccce71461048c5780636352211e146104db5761011f565b806301ffc9a71461012457806306fdde0314610196578063081812fc14610226578063095ea7b3146102a157806318160ddd146102fc575b600080fd5b34801561013057600080fd5b5061017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610a04565b604051808215151515815260200191505060405180910390f35b3480156101a257600080fd5b506101ab610a6b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561023257600080fd5b5061025f6004803603602081101561024957600080fd5b8101908080359060200190929190505050610b0d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102ad57600080fd5b506102fa600480360360408110156102c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ba8565b005b34801561030857600080fd5b50610311610d81565b6040518082815260200191505060405180910390f35b34801561033357600080fd5b506103a06004803603606081101561034a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d8e565b005b3480156103ae57600080fd5b506103fb600480360360408110156103c557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610dfd565b6040518082815260200191505060405180910390f35b34801561041d57600080fd5b5061048a6004803603606081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ebc565b005b34801561049857600080fd5b506104c5600480360360208110156104af57600080fd5b8101908080359060200190929190505050610edc565b6040518082815260200191505060405180910390f35b3480156104e757600080fd5b50610514600480360360208110156104fe57600080fd5b8101908080359060200190929190505050610f5c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561056257600080fd5b506105a56004803603602081101561057957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611024565b6040518082815260200191505060405180910390f35b3480156105c757600080fd5b506105d06110f9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61065e6004803603604081101561062857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061111f565b005b34801561066c57600080fd5b506106756111e7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106b557808201518184015260208101905061069a565b50505050905090810190601f1680156106e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106fc57600080fd5b5061074b6004803603604081101561071357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611289565b005b34801561075957600080fd5b5061085d6004803603608081101561077057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107d757600080fd5b8201836020820111156107e957600080fd5b8035906020019184600183028401116401000000008311171561080b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061142c565b005b34801561086b57600080fd5b506108986004803603602081101561088257600080fd5b810190808035906020019092919050505061149e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108d85780820151818401526020810190506108bd565b50505050905090810190601f1680156109055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561091f57600080fd5b506109286115b1565b005b34801561093657600080fd5b506109996004803603604081101561094d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061169d565b604051808215151515815260200191505060405180910390f35b3480156109bf57600080fd5b50610a02600480360360208110156109d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611731565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b035780601f10610ad857610100808354040283529160200191610b03565b820191906000526020600020905b815481529060010190602001808311610ae657829003601f168201915b5050505050905090565b6000610b18826117cf565b610b6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806125b2602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610bb382610f5c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806126366021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610c7a5750610c79813361169d565b5b610ccf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806125276038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610d983382611841565b610ded576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806126576031913960400191505060405180910390fd5b610df8838383611935565b505050565b6000610e0883611024565b8210610e5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b81526020018061247a602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610ea957fe5b9060005260206000200154905092915050565b610ed78383836040518060200160405280600081525061142c565b505050565b6000610ee6610d81565b8210610f3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612688602c913960400191505060405180910390fd5b60078281548110610f4a57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561101b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806125896029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061255f602a913960400191505060405180910390fd5b6110f2600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611959565b9050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082148061112e5750600182145b61113757600080fd5b600082141561115657670de0b6b3a764000034101561115557600080fd5b5b60018214156111745766b1a2bc2ec5000034101561117357600080fd5b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156111c8576111c333600d600081548092919060010191905055611967565b6111e3565b6111e281600d600081548092919060010191905055611967565b5b5050565b6060600a8054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561127f5780601f106112545761010080835404028352916020019161127f565b820191906000526020600020905b81548152906001019060200180831161126257829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561132b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611437848484610d8e565b61144384848484611988565b611498576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806124a56032913960400191505060405180910390fd5b50505050565b60606114a9826117cf565b6114fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612607602f913960400191505060405180910390fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115a55780601f1061157a576101008083540402835291602001916115a5565b820191906000526020600020905b81548152906001019060200180831161158857829003601f168201915b50505050509050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461160b57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461166557600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f1935050505050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461178b57600080fd5b80600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061184c826117cf565b6118a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806124fb602c913960400191505060405180910390fd5b60006118ac83610f5c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061191b57508373ffffffffffffffffffffffffffffffffffffffff1661190384610b0d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061192c575061192b818561169d565b5b91505092915050565b611940838383611b71565b61194a8382611dcc565b6119548282611f6a565b505050565b600081600001549050919050565b6119718282612031565b61197b8282611f6a565b61198481612249565b5050565b60006119a98473ffffffffffffffffffffffffffffffffffffffff16612295565b6119b65760019050611b69565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a91578082015181840152602081019050611a76565b50505050905090810190601f168015611abe5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611ae057600080fd5b505af1158015611af4573d6000803e3d6000fd5b505050506040513d6020811015611b0a57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16611b9182610f5c565b73ffffffffffffffffffffffffffffffffffffffff1614611bfd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806125de6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c83576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124d76024913960400191505060405180910390fd5b611c8c816122a8565b611cd3600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612366565b611d1a600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612389565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611e246001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061239f90919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114611f11576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611e9157fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611ee957fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611f639190612428565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156120d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6120dd816117cf565b15612150576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506121e9600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612389565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146123635760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b61237e6001826000015461239f90919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b600082821115612417576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b81548183558181111561244f5781836000526020600020918201910161244e9190612454565b5b505050565b61247691905b8082111561247257600081600090555060010161245a565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582037a8a45f5dc2a924857bd1924ce3d2a3756bae815f546daa6a27eec7a2c4be9764736f6c63430005100032",
  "sourceMap": "53:796:2:-;;;125:1;114:12;;131:81;8:9:-1;5:2;;;30:1;27;20:12;5:2;131:81:2;36885:155:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36962:4;36968:6;10817:40;10484:10;10836:20;;10817:18;;;:40;;:::i;:::-;13817;13691:10;13836:20;;13817:18;;;:40;;:::i;:::-;25848:51;25663:10;25867:31;;25848:18;;;:51;;:::i;:::-;34528:4;34520:5;:12;;;;;;;;;;;;:::i;:::-;;34552:6;34542:7;:16;;;;;;;;;;;;:::i;:::-;;34646:49;34382:10;34665:29;;34646:18;;;:49;;:::i;:::-;34448:254;;36885:155;;197:10:2;189:5;;:18;;;;;;;;;;;;;;;;;;53:796;;11541:190:0;11631:10;11616:25;;:11;:25;;;;;11608:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11720:4;11684:20;:33;11705:11;11684:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;11541:190;:::o;53:796:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "53:796:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11014:133:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11014:133:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11014:133:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;34807:83;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34807:83:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;34807:83:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15834:200;;8:9:-1;5:2;;;30:1;27;20:12;5:2;15834:200:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15834:200:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;15138:411;;8:9:-1;5:2;;;30:1;27;20:12;5:2;15138:411:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15138:411:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;26662:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26662:94:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;17474:285;;8:9:-1;5:2;;;30:1;27;20:12;5:2;17474:285:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;17474:285:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;26280:229;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26280:229:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;26280:229:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;18392:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;18392:132:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;18392:132:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;27094:196;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27094:196:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;27094:196:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;14494:223;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14494:223:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14494:223:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;14068:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14068:207:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14068:207:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;90:20:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;90:20:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;511:336;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;511:336:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;34999:87:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34999:87:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;34999:87:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16327:243;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16327:243:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16327:243:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;19229:265;;8:9:-1;5:2;;;30:1;27;20:12;5:2;19229:265:0;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;19229:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;19229:265:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;19229:265:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;19229:265:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;19229:265:0;;;;;;;;;;;;;;;:::i;:::-;;35286:202;;8:9:-1;5:2;;;30:1;27;20:12;5:2;35286:202:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;35286:202:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;35286:202:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;384:123:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;384:123:2;;;:::i;:::-;;16892:145:0;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16892:145:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16892:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;287:93:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;287:93:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;287:93:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;11014:133:0;11084:4;11107:20;:33;11128:11;11107:33;;;;;;;;;;;;;;;;;;;;;;;;;;;11100:40;;11014:133;;;:::o;34807:83::-;34846:13;34878:5;34871:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;34807:83;:::o;15834:200::-;15893:7;15920:16;15928:7;15920;:16::i;:::-;15912:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16003:15;:24;16019:7;16003:24;;;;;;;;;;;;;;;;;;;;;15996:31;;15834:200;;;:::o;15138:411::-;15201:13;15217:16;15225:7;15217;:16::i;:::-;15201:32;;15257:5;15251:11;;:2;:11;;;;15243:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15333:5;15319:19;;:10;:19;;;:58;;;;15342:35;15359:5;15366:10;15342:16;:35::i;:::-;15319:58;15311:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15497:2;15470:15;:24;15486:7;15470:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;15534:7;15530:2;15514:28;;15523:5;15514:28;;;;;;;;;;;;15138:411;;;:::o;26662:94::-;26706:7;26732:10;:17;;;;26725:24;;26662:94;:::o;17474:285::-;17616:39;17635:10;17647:7;17616:18;:39::i;:::-;17608:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;17720:32;17734:4;17740:2;17744:7;17720:13;:32::i;:::-;17474:285;;;:::o;26280:229::-;26360:7;26395:16;26405:5;26395:9;:16::i;:::-;26387:5;:24;26379:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26476:12;:19;26489:5;26476:19;;;;;;;;;;;;;;;26496:5;26476:26;;;;;;;;;;;;;;;;26469:33;;26280:229;;;;:::o;18392:132::-;18478:39;18495:4;18501:2;18505:7;18478:39;;;;;;;;;;;;:16;:39::i;:::-;18392:132;;;:::o;27094:196::-;27152:7;27187:13;:11;:13::i;:::-;27179:5;:21;27171:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27266:10;27277:5;27266:17;;;;;;;;;;;;;;;;27259:24;;27094:196;;;:::o;14494:223::-;14549:7;14568:13;14584:11;:20;14596:7;14584:20;;;;;;;;;;;;;;;;;;;;;14568:36;;14639:1;14622:19;;:5;:19;;;;14614:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14705:5;14698:12;;;14494:223;;;:::o;14068:207::-;14123:7;14167:1;14150:19;;:5;:19;;;;14142:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14234:34;:17;:24;14252:5;14234:24;;;;;;;;;;;;;;;:32;:34::i;:::-;14227:41;;14068:207;;;:::o;90:20:2:-;;;;;;;;;;;;;:::o;511:336::-;588:1;583;:6;:16;;;;598:1;593;:6;583:16;575:25;;;;;;615:1;610;:6;606:57;;;648:7;634:9;:21;;626:30;;;;;;606:57;677:1;672;:6;668:60;;;710:10;696:9;:24;;688:33;;;;;;668:60;757:1;737:22;;:8;:22;;;733:110;;;769:24;775:10;787:3;;:5;;;;;;;;;;;;769;:24::i;:::-;733:110;;;814:22;820:8;830:3;;:5;;;;;;;;;;;;814;:22::i;:::-;733:110;511:336;;:::o;34999:87:0:-;35040:13;35072:7;35065:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;34999:87;:::o;16327:243::-;16412:10;16406:16;;:2;:16;;;;16398:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16500:8;16463:18;:30;16482:10;16463:30;;;;;;;;;;;;;;;:34;16494:2;16463:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;16550:2;16523:40;;16538:10;16523:40;;;16554:8;16523:40;;;;;;;;;;;;;;;;;;;;;;16327:243;;:::o;19229:265::-;19335:31;19348:4;19354:2;19358:7;19335:12;:31::i;:::-;19384:48;19407:4;19413:2;19417:7;19426:5;19384:22;:48::i;:::-;19376:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19229:265;;;;:::o;35286:202::-;35344:13;35377:16;35385:7;35377;:16::i;:::-;35369:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;35462:10;:19;35473:7;35462:19;;;;;;;;;;;35455:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;35286:202;;;:::o;384:123:2:-;265:5;;;;;;;;;;;251:19;;:10;:19;;;243:28;;;;;;452:5;;;;;;;;;;;438:19;;:10;:19;;;430:28;;;;;;464:10;:15;;:38;480:21;464:38;;;;;;;;;;;;;;;;;;;;;;;;384:123::o;16892:145:0:-;16972:4;16995:18;:25;17014:5;16995:25;;;;;;;;;;;;;;;:35;17021:8;16995:35;;;;;;;;;;;;;;;;;;;;;;;;;16988:42;;16892:145;;;;:::o;287:93:2:-;265:5;;;;;;;;;;;251:19;;:10;:19;;;243:28;;;;;;365:10;357:5;;:18;;;;;;;;;;;;;;;;;;287:93;:::o;19689:152:0:-;19746:4;19762:13;19778:11;:20;19790:7;19778:20;;;;;;;;;;;;;;;;;;;;;19762:36;;19832:1;19815:19;;:5;:19;;;;19808:26;;;19689:152;;;:::o;20202:329::-;20287:4;20311:16;20319:7;20311;:16::i;:::-;20303:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20386:13;20402:16;20410:7;20402;:16::i;:::-;20386:32;;20447:5;20436:16;;:7;:16;;;:51;;;;20480:7;20456:31;;:20;20468:7;20456:11;:20::i;:::-;:31;;;20436:51;:87;;;;20491:32;20508:5;20515:7;20491:16;:32::i;:::-;20436:87;20428:96;;;20202:329;;;;:::o;27665:239::-;27750:38;27770:4;27776:2;27780:7;27750:19;:38::i;:::-;27799:47;27832:4;27838:7;27799:32;:47::i;:::-;27857:40;27885:2;27889:7;27857:27;:40::i;:::-;27665:239;;;:::o;9739:112::-;9804:7;9830;:14;;;9823:21;;9739:112;;;:::o;28161:196::-;28224:24;28236:2;28240:7;28224:11;:24::i;:::-;28259:40;28287:2;28291:7;28259:27;:40::i;:::-;28310;28342:7;28310:31;:40::i;:::-;28161:196;;:::o;23368:347::-;23489:4;23514:15;:2;:13;;;:15::i;:::-;23509:58;;23552:4;23545:11;;;;23509:58;23577:13;23609:2;23593:36;;;23630:10;23642:4;23648:7;23657:5;23593:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;23593:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;23593:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;23593:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;23593:70:0;;;;;;;;;;;;;;;;23577:86;;12310:10;23691:16;;23681:26;;;:6;:26;;;;23673:35;;;23368:347;;;;;;;:::o;22348:447::-;22461:4;22441:24;;:16;22449:7;22441;:16::i;:::-;:24;;;22433:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22543:1;22529:16;;:2;:16;;;;22521:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22597:23;22612:7;22597:14;:23::i;:::-;22631:35;:17;:23;22649:4;22631:23;;;;;;;;;;;;;;;:33;:35::i;:::-;22676:33;:17;:21;22694:2;22676:21;;;;;;;;;;;;;;;:31;:33::i;:::-;22743:2;22720:11;:20;22732:7;22720:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;22780:7;22776:2;22761:27;;22770:4;22761:27;;;;;;;;;;;;22348:447;;;:::o;30773:1128::-;31035:22;31060:32;31090:1;31060:12;:18;31073:4;31060:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;31035:57;;31102:18;31123:17;:26;31141:7;31123:26;;;;;;;;;;;;31102:47;;31267:14;31253:10;:28;31249:323;;31297:19;31319:12;:18;31332:4;31319:18;;;;;;;;;;;;;;;31338:14;31319:34;;;;;;;;;;;;;;;;31297:56;;31401:11;31368:12;:18;31381:4;31368:18;;;;;;;;;;;;;;;31387:10;31368:30;;;;;;;;;;;;;;;:44;;;;31517:10;31484:17;:30;31502:11;31484:30;;;;;;;;;;;:43;;;;31249:323;;31658:12;:18;31671:4;31658:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;30773:1128;;;;:::o;29619:183::-;29732:12;:16;29745:2;29732:16;;;;;;;;;;;;;;;:23;;;;29703:17;:26;29721:7;29703:26;;;;;;;;;;;:52;;;;29765:12;:16;29778:2;29765:16;;;;;;;;;;;;;;;29787:7;29765:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;29765:30:0;;;;;;;;;;;;;;;;;;;;;;29619:183;;:::o;20776:327::-;20861:1;20847:16;;:2;:16;;;;20839:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20919:16;20927:7;20919;:16::i;:::-;20918:17;20910:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21002:2;20979:11;:20;20991:7;20979:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;21014:33;:17;:21;21032:2;21014:21;;;;;;;;;;;;;;;:31;:33::i;:::-;21088:7;21084:2;21063:33;;21080:1;21063:33;;;;;;;;;;;;20776:327;;:::o;29997:161::-;30100:10;:17;;;;30073:15;:24;30089:7;30073:24;;;;;;;;;;;:44;;;;30127:10;30143:7;30127:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;30127:24:0;;;;;;;;;;;;;;;;;;;;;;29997:161;:::o;8236:413::-;8296:4;8499:12;8608:7;8596:20;8588:28;;8641:1;8634:4;:8;8627:15;;;8236:413;;;:::o;23877:171::-;23976:1;23940:38;;:15;:24;23956:7;23940:24;;;;;;;;;;;;;;;;;;;;;:38;;;23936:106;;24029:1;23994:15;:24;24010:7;23994:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;23936:106;23877:171;:::o;9952:108::-;10032:21;10051:1;10032:7;:14;;;:18;;:21;;;;:::i;:::-;10015:7;:14;;:38;;;;9952:108;:::o;9857:89::-;9938:1;9920:7;:14;;;:19;;;;;;;;;;;9857:89;:::o;5386:179::-;5444:7;5476:1;5471;:6;;5463:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5522:9;5538:1;5534;:5;5522:17;;5557:1;5550:8;;;5386:179;;;;:::o;53:796:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport \"./ERC721Full.sol\";\n\ncontract ethemblem is ERC721Full {\n  address public owner;\n  uint _id = 0;\n\n  constructor() ERC721Full(\"Ethemblem\", \"ETE\") public {\n    owner = msg.sender;\n  }\n\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n  function transferOwnership(address newAddress) public onlyOwner {\n    owner = newAddress;\n  }\n\n  function withdrawETH() public onlyOwner {\n    require(msg.sender == owner);\n    msg.sender.send(address(this).balance);\n  }\n\n  function mint(uint256 f, address receiver) payable public {\n    require(f == 0 || f == 1);\n    if (f == 0) {\n      require(msg.value >=  1 ether);\n    }\n    if (f == 1) {\n      require(msg.value >=  0.05 ether);\n    }\n    if (receiver == address(0)) {\n      _mint(msg.sender, _id++);\n    } else {\n      _mint(receiver, _id++);\n    }\n  }\n}\n",
  "sourcePath": "C:/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ethemblem.sol",
  "ast": {
    "absolutePath": "/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ethemblem.sol",
    "exportedSymbols": {
      "ethemblem": [
        1645
      ]
    },
    "id": 1646,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1513,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ERC721Full.sol",
        "file": "./ERC721Full.sol",
        "id": 1514,
        "nodeType": "ImportDirective",
        "scope": 1646,
        "sourceUnit": 1455,
        "src": "25:26:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1515,
              "name": "ERC721Full",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1454,
              "src": "75:10:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Full_$1454",
                "typeString": "contract ERC721Full"
              }
            },
            "id": 1516,
            "nodeType": "InheritanceSpecifier",
            "src": "75:10:2"
          }
        ],
        "contractDependencies": [
          9,
          110,
          372,
          930,
          955,
          1288,
          1309,
          1434,
          1454
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1645,
        "linearizedBaseContracts": [
          1645,
          1454,
          1434,
          1309,
          1288,
          955,
          930,
          110,
          372,
          9
        ],
        "name": "ethemblem",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1518,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 1645,
            "src": "90:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1517,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "90:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1521,
            "name": "_id",
            "nodeType": "VariableDeclaration",
            "scope": 1645,
            "src": "114:12:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1519,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "114:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 1520,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "125:1:2",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1533,
              "nodeType": "Block",
              "src": "183:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1528,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1518,
                      "src": "189:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1529,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1660,
                        "src": "197:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "197:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "189:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1532,
                  "nodeType": "ExpressionStatement",
                  "src": "189:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 1534,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "457468656d626c656d",
                    "id": 1524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "156:11:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_201c3a69518b6db9d8af6b30ba8a7c9a53b59122d215e645740022a83aac956d",
                      "typeString": "literal_string \"Ethemblem\""
                    },
                    "value": "Ethemblem"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "455445",
                    "id": 1525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "169:5:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d5af14e19096578a8e4281538f69c482e1968879d2d878978318c21def301b75",
                      "typeString": "literal_string \"ETE\""
                    },
                    "value": "ETE"
                  }
                ],
                "id": 1526,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1523,
                  "name": "ERC721Full",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1454,
                  "src": "145:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Full_$1454_$",
                    "typeString": "type(contract ERC721Full)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "145:30:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "142:2:2"
            },
            "returnParameters": {
              "id": 1527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:0:2"
            },
            "scope": 1645,
            "src": "131:81:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1544,
              "nodeType": "Block",
              "src": "237:46:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1537,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1660,
                            "src": "251:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "251:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1539,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1518,
                          "src": "265:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "251:19:2",
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
                      "id": 1536,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "243:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "243:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1542,
                  "nodeType": "ExpressionStatement",
                  "src": "243:28:2"
                },
                {
                  "id": 1543,
                  "nodeType": "PlaceholderStatement",
                  "src": "277:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 1545,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:2"
            },
            "src": "216:67:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1556,
              "nodeType": "Block",
              "src": "351:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1552,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1518,
                      "src": "357:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1553,
                      "name": "newAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1547,
                      "src": "365:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "357:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1555,
                  "nodeType": "ExpressionStatement",
                  "src": "357:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 1557,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 1550,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1549,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1545,
                  "src": "341:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "341:9:2"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1547,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1557,
                  "src": "314:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "313:20:2"
            },
            "returnParameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:2"
            },
            "scope": 1645,
            "src": "287:93:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1580,
              "nodeType": "Block",
              "src": "424:83:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1563,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1660,
                            "src": "438:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "438:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1565,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1518,
                          "src": "452:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "438:19:2",
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
                      "id": 1562,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "430:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1568,
                  "nodeType": "ExpressionStatement",
                  "src": "430:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1575,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1700,
                              "src": "488:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ethemblem_$1645",
                                "typeString": "contract ethemblem"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ethemblem_$1645",
                                "typeString": "contract ethemblem"
                              }
                            ],
                            "id": 1574,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "480:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "480:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1577,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "480:21:2",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 1569,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1660,
                          "src": "464:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "464:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 1573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "send",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "464:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) returns (bool)"
                      }
                    },
                    "id": 1578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "464:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1579,
                  "nodeType": "ExpressionStatement",
                  "src": "464:38:2"
                }
              ]
            },
            "documentation": null,
            "id": 1581,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 1560,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1559,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1545,
                  "src": "414:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "414:9:2"
              }
            ],
            "name": "withdrawETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:2:2"
            },
            "returnParameters": {
              "id": 1561,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "424:0:2"
            },
            "scope": 1645,
            "src": "384:123:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1643,
              "nodeType": "Block",
              "src": "569:278:2",
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
                        "id": 1595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1591,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1589,
                            "name": "f",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1583,
                            "src": "583:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "588:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "583:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1592,
                            "name": "f",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1583,
                            "src": "593:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "598:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "593:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "583:16:2",
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
                      "id": 1588,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "575:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "575:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1597,
                  "nodeType": "ExpressionStatement",
                  "src": "575:25:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1598,
                      "name": "f",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "610:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "615:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "610:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1609,
                  "nodeType": "IfStatement",
                  "src": "606:57:2",
                  "trueBody": {
                    "id": 1608,
                    "nodeType": "Block",
                    "src": "618:45:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1602,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1660,
                                  "src": "634:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1603,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "634:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1604,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "648:7:2",
                                "subdenomination": "ether",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                  "typeString": "int_const 1000000000000000000"
                                },
                                "value": "1"
                              },
                              "src": "634:21:2",
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
                            "id": 1601,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1663,
                              1664
                            ],
                            "referencedDeclaration": 1663,
                            "src": "626:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 1606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "626:30:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1607,
                        "nodeType": "ExpressionStatement",
                        "src": "626:30:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1610,
                      "name": "f",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "672:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 1611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "677:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "672:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1621,
                  "nodeType": "IfStatement",
                  "src": "668:60:2",
                  "trueBody": {
                    "id": 1620,
                    "nodeType": "Block",
                    "src": "680:48:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1617,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1614,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1660,
                                  "src": "696:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1615,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "696:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "302e3035",
                                "id": 1616,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "710:10:2",
                                "subdenomination": "ether",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_50000000000000000_by_1",
                                  "typeString": "int_const 50000000000000000"
                                },
                                "value": "0.05"
                              },
                              "src": "696:24:2",
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
                            "id": 1613,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1663,
                              1664
                            ],
                            "referencedDeclaration": 1663,
                            "src": "688:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 1618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "688:33:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1619,
                        "nodeType": "ExpressionStatement",
                        "src": "688:33:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 1626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1622,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "737:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1624,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "757:1:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 1623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "749:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 1625,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "749:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "737:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1641,
                    "nodeType": "Block",
                    "src": "806:37:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1636,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1585,
                              "src": "820:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1638,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "830:5:2",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 1637,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1521,
                                "src": "830:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
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
                            "id": 1635,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1095
                            ],
                            "referencedDeclaration": 1095,
                            "src": "814:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 1639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "814:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1640,
                        "nodeType": "ExpressionStatement",
                        "src": "814:22:2"
                      }
                    ]
                  },
                  "id": 1642,
                  "nodeType": "IfStatement",
                  "src": "733:110:2",
                  "trueBody": {
                    "id": 1634,
                    "nodeType": "Block",
                    "src": "761:39:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1628,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1660,
                                "src": "775:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1629,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "775:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1631,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "787:5:2",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 1630,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1521,
                                "src": "787:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 1627,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1095
                            ],
                            "referencedDeclaration": 1095,
                            "src": "769:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 1632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "769:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1633,
                        "nodeType": "ExpressionStatement",
                        "src": "769:24:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1644,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1583,
                  "name": "f",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "525:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1585,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "536:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "524:29:2"
            },
            "returnParameters": {
              "id": 1587,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "569:0:2"
            },
            "scope": 1645,
            "src": "511:336:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1646,
        "src": "53:796:2"
      }
    ],
    "src": "0:850:2"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ethemblem.sol",
    "exportedSymbols": {
      "ethemblem": [
        1645
      ]
    },
    "id": 1646,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1513,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "/C/Users/dl/Desktop/stencil/ethemblem-contracts/src/contracts/ERC721Full.sol",
        "file": "./ERC721Full.sol",
        "id": 1514,
        "nodeType": "ImportDirective",
        "scope": 1646,
        "sourceUnit": 1455,
        "src": "25:26:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1515,
              "name": "ERC721Full",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1454,
              "src": "75:10:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Full_$1454",
                "typeString": "contract ERC721Full"
              }
            },
            "id": 1516,
            "nodeType": "InheritanceSpecifier",
            "src": "75:10:2"
          }
        ],
        "contractDependencies": [
          9,
          110,
          372,
          930,
          955,
          1288,
          1309,
          1434,
          1454
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1645,
        "linearizedBaseContracts": [
          1645,
          1454,
          1434,
          1309,
          1288,
          955,
          930,
          110,
          372,
          9
        ],
        "name": "ethemblem",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1518,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 1645,
            "src": "90:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1517,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "90:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 1521,
            "name": "_id",
            "nodeType": "VariableDeclaration",
            "scope": 1645,
            "src": "114:12:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1519,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "114:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 1520,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "125:1:2",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1533,
              "nodeType": "Block",
              "src": "183:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1528,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1518,
                      "src": "189:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 1529,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1660,
                        "src": "197:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 1530,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "197:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "189:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1532,
                  "nodeType": "ExpressionStatement",
                  "src": "189:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 1534,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "457468656d626c656d",
                    "id": 1524,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "156:11:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_201c3a69518b6db9d8af6b30ba8a7c9a53b59122d215e645740022a83aac956d",
                      "typeString": "literal_string \"Ethemblem\""
                    },
                    "value": "Ethemblem"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "455445",
                    "id": 1525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "169:5:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d5af14e19096578a8e4281538f69c482e1968879d2d878978318c21def301b75",
                      "typeString": "literal_string \"ETE\""
                    },
                    "value": "ETE"
                  }
                ],
                "id": 1526,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1523,
                  "name": "ERC721Full",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1454,
                  "src": "145:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Full_$1454_$",
                    "typeString": "type(contract ERC721Full)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "145:30:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1522,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "142:2:2"
            },
            "returnParameters": {
              "id": 1527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "183:0:2"
            },
            "scope": 1645,
            "src": "131:81:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1544,
              "nodeType": "Block",
              "src": "237:46:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1540,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1537,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1660,
                            "src": "251:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1538,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "251:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1539,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1518,
                          "src": "265:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "251:19:2",
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
                      "id": 1536,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "243:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1541,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "243:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1542,
                  "nodeType": "ExpressionStatement",
                  "src": "243:28:2"
                },
                {
                  "id": 1543,
                  "nodeType": "PlaceholderStatement",
                  "src": "277:1:2"
                }
              ]
            },
            "documentation": null,
            "id": 1545,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1535,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "234:2:2"
            },
            "src": "216:67:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1556,
              "nodeType": "Block",
              "src": "351:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1552,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1518,
                      "src": "357:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1553,
                      "name": "newAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1547,
                      "src": "365:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "357:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1555,
                  "nodeType": "ExpressionStatement",
                  "src": "357:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 1557,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 1550,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1549,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1545,
                  "src": "341:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "341:9:2"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1548,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1547,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 1557,
                  "src": "314:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1546,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "313:20:2"
            },
            "returnParameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:2"
            },
            "scope": 1645,
            "src": "287:93:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1580,
              "nodeType": "Block",
              "src": "424:83:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1563,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1660,
                            "src": "438:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "438:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1565,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1518,
                          "src": "452:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "438:19:2",
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
                      "id": 1562,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "430:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "430:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1568,
                  "nodeType": "ExpressionStatement",
                  "src": "430:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1575,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1700,
                              "src": "488:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ethemblem_$1645",
                                "typeString": "contract ethemblem"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ethemblem_$1645",
                                "typeString": "contract ethemblem"
                              }
                            ],
                            "id": 1574,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "480:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 1576,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "480:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1577,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "480:21:2",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 1569,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1660,
                          "src": "464:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "464:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 1573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "send",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "464:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (uint256) returns (bool)"
                      }
                    },
                    "id": 1578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "464:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1579,
                  "nodeType": "ExpressionStatement",
                  "src": "464:38:2"
                }
              ]
            },
            "documentation": null,
            "id": 1581,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 1560,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1559,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1545,
                  "src": "414:9:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "414:9:2"
              }
            ],
            "name": "withdrawETH",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1558,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "404:2:2"
            },
            "returnParameters": {
              "id": 1561,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "424:0:2"
            },
            "scope": 1645,
            "src": "384:123:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1643,
              "nodeType": "Block",
              "src": "569:278:2",
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
                        "id": 1595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1591,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1589,
                            "name": "f",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1583,
                            "src": "583:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "588:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "583:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1594,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1592,
                            "name": "f",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1583,
                            "src": "593:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 1593,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "598:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "593:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "583:16:2",
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
                      "id": 1588,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1663,
                        1664
                      ],
                      "referencedDeclaration": 1663,
                      "src": "575:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "575:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1597,
                  "nodeType": "ExpressionStatement",
                  "src": "575:25:2"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1600,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1598,
                      "name": "f",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "610:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1599,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "615:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "610:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1609,
                  "nodeType": "IfStatement",
                  "src": "606:57:2",
                  "trueBody": {
                    "id": 1608,
                    "nodeType": "Block",
                    "src": "618:45:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1602,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1660,
                                  "src": "634:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1603,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "634:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "31",
                                "id": 1604,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "648:7:2",
                                "subdenomination": "ether",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                                  "typeString": "int_const 1000000000000000000"
                                },
                                "value": "1"
                              },
                              "src": "634:21:2",
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
                            "id": 1601,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1663,
                              1664
                            ],
                            "referencedDeclaration": 1663,
                            "src": "626:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 1606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "626:30:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1607,
                        "nodeType": "ExpressionStatement",
                        "src": "626:30:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1612,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1610,
                      "name": "f",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1583,
                      "src": "672:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 1611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "677:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "672:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 1621,
                  "nodeType": "IfStatement",
                  "src": "668:60:2",
                  "trueBody": {
                    "id": 1620,
                    "nodeType": "Block",
                    "src": "680:48:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 1617,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 1614,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1660,
                                  "src": "696:3:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 1615,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "value",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "696:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "302e3035",
                                "id": 1616,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "710:10:2",
                                "subdenomination": "ether",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_50000000000000000_by_1",
                                  "typeString": "int_const 50000000000000000"
                                },
                                "value": "0.05"
                              },
                              "src": "696:24:2",
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
                            "id": 1613,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1663,
                              1664
                            ],
                            "referencedDeclaration": 1663,
                            "src": "688:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                              "typeString": "function (bool) pure"
                            }
                          },
                          "id": 1618,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "688:33:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1619,
                        "nodeType": "ExpressionStatement",
                        "src": "688:33:2"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 1626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1622,
                      "name": "receiver",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "737:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 1624,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "757:1:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 1623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "749:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 1625,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "749:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "737:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1641,
                    "nodeType": "Block",
                    "src": "806:37:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1636,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1585,
                              "src": "820:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1638,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "830:5:2",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 1637,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1521,
                                "src": "830:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
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
                            "id": 1635,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1095
                            ],
                            "referencedDeclaration": 1095,
                            "src": "814:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 1639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "814:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1640,
                        "nodeType": "ExpressionStatement",
                        "src": "814:22:2"
                      }
                    ]
                  },
                  "id": 1642,
                  "nodeType": "IfStatement",
                  "src": "733:110:2",
                  "trueBody": {
                    "id": 1634,
                    "nodeType": "Block",
                    "src": "761:39:2",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1628,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1660,
                                "src": "775:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1629,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "775:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1631,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "++",
                              "prefix": false,
                              "src": "787:5:2",
                              "subExpression": {
                                "argumentTypes": null,
                                "id": 1630,
                                "name": "_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1521,
                                "src": "787:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 1627,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1095
                            ],
                            "referencedDeclaration": 1095,
                            "src": "769:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 1632,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "769:24:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 1633,
                        "nodeType": "ExpressionStatement",
                        "src": "769:24:2"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 1644,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1583,
                  "name": "f",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "525:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1582,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "525:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1585,
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "536:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1584,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "536:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "524:29:2"
            },
            "returnParameters": {
              "id": 1587,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "569:0:2"
            },
            "scope": 1645,
            "src": "511:336:2",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 1646,
        "src": "53:796:2"
      }
    ],
    "src": "0:850:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xDa895CE9C2483A9fF021502e69e8370A2e90eBAE",
      "transactionHash": "0x6e180f4b222f78671976e4aef16427cdc3e8c72ded87afb16901d040960b625b"
    }
  },
  "schemaVersion": "3.3.2",
  "updatedAt": "2020-11-15T16:20:29.479Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "name()": {
        "details": "Gets the token name.",
        "return": "string representing the token name"
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "address currently marked as the owner of the given token ID"
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See `IERC165.supportsInterface`.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Gets the token symbol.",
        "return": "string representing the token symbol"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "tokenURI(uint256)": {
        "details": "Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.",
        "params": {
          "tokenId": "uint256 ID of the token to query"
        }
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
        "return": "uint256 representing the total amount of tokens"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use `safeTransferFrom` whenever possible. Requires the msg.sender to be the owner, approved, or operator.",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}