import Web3 from "web3";

const contract_ABI = [{
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "tokenURI",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}
    , {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }]
const contractAddress = "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6"
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/87412721a036423e85209e4581e38341');
const web3 = new Web3(provider);
const contractMethods = new web3.eth.Contract(contract_ABI, contractAddress).methods;
export default {
    getToken(tokenId){
        return contractMethods.tokenURI(tokenId).call()
    },
    getOwner(tokenId){
        return contractMethods.ownerOf(tokenId).call()
    }
}