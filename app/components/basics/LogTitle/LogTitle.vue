<template>
  <h2 class="log-title">
    {{ title }}
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LogTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.log-title {
  color: inherit;
}
</style>
