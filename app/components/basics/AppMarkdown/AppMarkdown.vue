<template>
  <div class="app-markdown">
    <div v-html="body" />
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
</style>
