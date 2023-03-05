<template>
  <div class="search__component">
    <img alt="image" src="src/assets/Search.PNG"/>
    <h1>The Doggies Explorer</h1>
    <div class="cardContainer">
      <h3>Token Id</h3>
      <input type="number"
             min="0"
             v-model="tokenId"
             placeholder="Token Id"/>
      <button @click="onClickButton('Search')" class="button">Search</button>
      <button @click="onClickButton('Random')" class="button">Random</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      tokenId: null,
    }
  },
  methods: {
    onClickButton(event) {
      switch (event) {
        case 'Random':
          this.$emit('tokenId', Math.floor(1000 + Math.random() * 9000))
          this.tokenId = ''
          break;
        case 'Search':
          this.$emit('tokenId', this.tokenId)
          this.tokenId = ''
          break;
      }
    }
  }
}


</script>


<style lang="scss">
@import "../assets/main.scss";

.search__component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 25%;
}

img {
  height: 200px;
  object-fit: cover;
}

h1 {
  text-align: center;
}

.cardContainer {
  margin: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px
}

input {
  width: 100%;
  height: 25px;
  padding: 5px;
}

.button {
  background-color: #555555;
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 2px 1px;
  cursor: pointer;
  width: 100%;

  &:hover{
    background-color: black;
  }
}

</style>