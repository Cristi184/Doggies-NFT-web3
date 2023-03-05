<script setup>
import NftComponent from "@/components/NftComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
</script>

<template>
  <SearchComponent @tokenId="getTokenId"/>
  <NftComponent :tokenId="this.tokenId"/>
</template>

<script>
export default {
  data() {
    return {
      tokenId: -1,
    }
  },
  methods:{
    getTokenId (event) {
     this.tokenId = event
    }
  }

}

</script>
