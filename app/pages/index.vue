<template>
  <div>
    <LogList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LogList from '@/components/containers/LogList/LogList.vue';
export default Vue.extend({
  components: {
    LogList,
  },
});
</script>
