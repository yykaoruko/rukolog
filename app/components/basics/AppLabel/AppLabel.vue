<template>
  <div class="app-label">
    {{ label }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppLabel',
  props: {
    label: {
      type: String,
      required: true,
      validator(value) {
        return value !== '';
      },
    },
  },
});
</script>

<style lang="scss" scoped>
.app-label {
  color: inherit;
}
</style>
