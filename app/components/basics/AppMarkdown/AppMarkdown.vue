<template>
  <div class="app-markdown">
    <div class="app-markdown__body" v-html="body" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppMarkdown',
  props: {
    body: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.app-markdown {
  color: inherit;
}
.app-markdown__body {
  margin: 16px auto;
}
.app-markdown__body /deep/ {
  h2,
  h3,
  h4,
  h5 {
    font-size: 1.2rem;
  }
}
</style>
