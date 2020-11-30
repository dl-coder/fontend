import { ethemblem } from "../helpers/ethemblem";

export class walletConnection {
    account;

    contract;
    web3;
    address = "0x184b1d4E69c455F0b2Cd13dfa5A0e3B3F9BC6642";

    private static _instance: walletConnection;

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    async componentWillMount(caller) {
        await this.loadWeb3();
        await this.loadBlockchainData();
        caller.connected = true;
        caller.account = this.account;
    }

    async loadWeb3() {
        //@ts-ignore
        if (window.ethereum) {
            //@ts-ignore
            window.web3 = new Web3(window.ethereum);
            //@ts-ignore
            await window.ethereum.enable()
        }
        //@ts-ignore
        else if (window.web3) {
            //@ts-ignore
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        //@ts-ignore
        this.web3 = window.web3;
        // Load account
        //@ts-ignore
        const accounts = await this.web3.eth.getAccounts();
        this.account = accounts[0];
        const abi = ethemblem.abi;
        //@ts-ignore
        this.contract = new web3.eth.Contract(abi, this.address);
    }

    async mint (type, ether, receiver) {
        // using the promise
        var address = receiver||"0x0000000000000000000000000000000000000000";
        //@ts-ignore
        var gas = await this.contract.methods.mint(type, address).estimateGas(type, address, {from: web3.eth.accounts[0]});
        //@ts-ignore
        this.contract.methods.mint(type, address).send({ from: this.account, gas: gas, value: window.web3.utils.toWei(ether + "", "ether") })
            .once('receipt', (receipt) => {
                console.log(receipt);
            });
    }
}
