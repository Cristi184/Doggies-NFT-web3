<template>
  <h1 v-if="error">Please choose another Token Id.</h1>
  <div v-if="data.name" class="nft__component">
    <hr/>
    <div class="wrapper">
      <div>
        <h3>Title and Owner</h3>
        <p id="title">Title: {{ data.name }}</p>
        <p id="owner">Owner: {{ data.owner }}</p>
        <h3>Description:</h3>
        <p id="description">{{ data.description }}</p>
      </div>
      <img alt="avatar" class="avatar" v-bind:src=data.image_url>
    </div>
    <hr/>
    <table>
      <tr>
        <th>Type</th>
        <th>Value</th>
      </tr>
      <tr v-for="(trait,key) in data.attributes" :key='key'>
        <td v-if="trait.value">
          {{ trait.trait_type }}
        </td>
        <td v-if="trait.value">
          {{ trait.value }}
        </td>
      </tr>
    </table>
    <iframe v-bind:src=data.iframe_url height="800px" width="800px"></iframe>
  </div>
</template>

<script>

export default {
  props: {
    tokenId: {
      type: Number,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    error: {
      type: Boolean,
      required: true,
      default:false,
    }
  },
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