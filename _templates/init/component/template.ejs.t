---
to: app/components/<%= category %>/<%= filename %>/<%= filename %>.vue
---
<template>
  <div class="<%= h.changeCase.paramCase(filename) %>">
    <%= filename %>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: '<%= filename %>',
});
</script>

<style lang="scss" scoped>
.<%= h.changeCase.paramCase(filename) %> {
  color: inherit;
}
</style>
