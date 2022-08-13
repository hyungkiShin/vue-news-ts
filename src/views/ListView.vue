<template>
  <div>
    <list-item :items="newsItems"></list-item>
  </div>
</template>

<script>
import { fetchNews } from '@/api'
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [],
    }
  },

  created() {
    this.fetchNewsItems()
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews()
      this.newsItems = response.data
    },
  },
}
</script>

<style></style>
