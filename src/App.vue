<template>
  <div id="app">
    <!-- <spinner :loading="loading"></spinner> -->
    <!-- https://eslint.vuejs.org/rules/multi-word-component-names.html -->
    <SpinnerItem :loading="loading" />
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToolBar from './components/ToolBar.vue'
import SpinnerItem from './components/SpinnerItem.vue'
import bus from './utils/bus'

export default Vue.extend({
  components: {
    ToolBar,
    SpinnerItem,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      this.loading = true
    },
    offProgress() {
      this.loading = false
    },
  },
  async created() {
    // this.$store.state.news
    // this.$store.commit(MutationTypes.SET_NEWS)
    // this.$store.getters
    // const response = await this.$store.dispatch(ActionTypes.FETCH_ASK)
    // const response = await this.$store.dispatch(ActionTypes.FETCH_USER, "afrcnc")
    // console.log("response", response)
    
    bus.$on('on:progress', this.onProgress)
    bus.$on('off:progress', this.offProgress)
  },
})
</script>
<style scoped></style>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

function fetchedUser() {
  throw new Error('Function not implemented.')
}
