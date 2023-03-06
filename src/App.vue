<script setup>
import NftComponent from "@/components/NftComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
</script>

<template>
  <SearchComponent @tokenId="getTokenId"/>
  <NftComponent :tokenId="tokenId" :data="details" :error="error"/>
</template>

<script>
import WebService from '/src/utils/WebService'

export default {
  data() {
    return {
      tokenId: -1,
      details: {},
      error: false,
    }
  },
  methods: {
    getTokenId(event) {
      this.tokenId = event
    },
    async getToken(tokenId) {
      try {
        const response = await fetch(await WebService.getToken(tokenId))
        this.details = await response.json();
        this.details.owner = await WebService.getOwner(tokenId)
        this.error = false
      } catch (error) {
        this.details = {}
        this.error = true
      }
    },
  },
  watch: {
    async tokenId() {
      await this.getToken(this.tokenId)
    }
  },
}

</script>
