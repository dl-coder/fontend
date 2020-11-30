//import Web3 from 'web3';
//import {AbiItem} from 'web3-utils';
//import {AbiItem} from 'web3-utils';
// @ts-ignore
// const web3 = new window.Web3(window.web3.currentProvider);
// const aggregatorV3InterfaceABI = [
//   {
//     "inputs": [],
//     "name": "decimals",
//     "outputs": [
//       {
//         "internalType": "uint8",
//         "name": "",
//         "type": "uint8"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "description",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint80",
//         "name": "_roundId",
//         "type": "uint80"
//       }
//     ],
//     "name": "getRoundData",
//     "outputs": [
//       {
//         "internalType": "uint80",
//         "name": "roundId",
//         "type": "uint80"
//       },
//       {
//         "internalType": "int256",
//         "name": "answer",
//         "type": "int256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "startedAt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "updatedAt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint80",
//         "name": "answeredInRound",
//         "type": "uint80"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "latestRoundData",
//     "outputs": [
//       {
//         "internalType": "uint80",
//         "name": "roundId",
//         "type": "uint80"
//       },
//       {
//         "internalType": "int256",
//         "name": "answer",
//         "type": "int256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "startedAt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint256",
//         "name": "updatedAt",
//         "type": "uint256"
//       },
//       {
//         "internalType": "uint80",
//         "name": "answeredInRound",
//         "type": "uint80"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "version",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "stateMutability",
//     "type": "function"
//   }
// ];
// const addr = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
// const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr);
// 
// export const getCurrentPrice = () => {
//   priceFeed.methods.latestRoundData().call().then((roundData) => {
//     console.log(roundData);
//   });
// }