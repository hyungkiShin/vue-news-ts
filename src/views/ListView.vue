<template>
  <div>
    <ListItemView :items="listItems"></ListItemView>
  </div>
</template>
ts
<script lang="ts">
import { fetchList, ListItem } from '@/api'
import Vue from 'vue'
import ListItemView from '../components/ListItem.vue'

export default Vue.extend({

  components: {
    ListItemView,
  },

  data() {
    return {
      listItems: [] as ListItem[],
    }
  },

  created() {
    this.fetchNewsItems()
  },

  methods: {
    async fetchNewsItems() {
      const type = this.$route.name
      const response = await fetchList(type)
      this.listItems = response.data
    },
  },
  
})
</script>
