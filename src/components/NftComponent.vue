<template>
  <h1 v-if="error">Please choose another Token Id.</h1>
  <div v-if="details.name" class="nft__component">
    <hr/>
    <div class="wrapper">
      <div>
        <h3>Title and Owner</h3>
        <p>Title: {{ this.details.name }}</p>
        <p>Owner: {{ this.details.owner }}</p>
        <h3>Description:</h3>
        <p>{{ this.details.description }}</p>
      </div>
      <img alt="avatar" class="avatar" v-bind:src=this.details.image_url>
    </div>
    <hr/>
    <table>
      <tr>
        <th>Type</th>
        <th>Value</th>
      </tr>
      <tr v-for="(trait,key) in this.details.attributes" :key='key'>
        <td v-if="trait.value">
          {{ trait.trait_type }}
        </td>
        <td v-if="trait.value">
          {{ trait.value }}
        </td>
      </tr>
    </table>
    <iframe v-bind:src=this.details.iframe_url height="800px" width="800px"></iframe>
  </div>
</template>

<script>
import Web3 from "web3";

const ABI = [{
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

export default {
  props: {
    tokenId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      details: {},
      contract: null,
      error:false
    }
  },
  async mounted() {
    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/87412721a036423e85209e4581e38341');
    const web3 = new Web3(provider);
    this.contract = new web3.eth.Contract(ABI, contractAddress);
  },
  watch: {
    async tokenId() {
      await this.getToken(this.contract, this.tokenId)
    }
  },
  methods: {
    async getToken(contract, tokenId) {
      try{
        const tokenURI = await contract.methods.tokenURI(tokenId).call();
        await this.fetchData(tokenURI)
        this.details.owner = await contract.methods.ownerOf(tokenId).call()
        this.error = false
      }catch (error){this.details = {},this.error = true}
    },
    async fetchData(data) {
      const response = await fetch(data);
      this.details = await response.json();
    }
  }
}
</script>
<style lang="scss">
@import 'src/assets/main.scss';

.nft__component {
  width: 800px;
  margin: auto;
}

.wrapper {
  display: flex;
  justify-content: center;
  gap: 10px
}

.avatar {
  width: 50%;
}

.trait__column {
  display: inline-block;
  margin-right: 10px;
}

table {
  width: 100%;

  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
}

</style>