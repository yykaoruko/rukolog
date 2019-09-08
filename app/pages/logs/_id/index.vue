<template>
  <div>
    <LogDetail :body="log.bodyHtml" :title="log.title" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LogDetail from '@/components/containers/LogDetail/LogDetail.vue';
export default Vue.extend({
  components: {
    LogDetail,
  },
  computed: {
    log() {
      return require(`@/contents/dist/${this.$route.params.id}.json`);
    },
  },
});
</script>
