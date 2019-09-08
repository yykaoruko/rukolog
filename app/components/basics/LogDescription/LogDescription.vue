<template>
  <p class="log-description">
    {{ text }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LogDescription',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.log-description {
  color: inherit;
}
</style>
