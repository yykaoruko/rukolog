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
  display: inline-block;
  width: 100%;
  min-width: 30px;
  padding: 2px 8px;
  border-radius: 8px;
  background: $color-gray;
  color: $color-base;
  font-size: 0.8rem;
}
</style>
