<template>
  <article class="log-detail">
    <h1 class="log-detail__title">{{ title }}</h1>
    <app-markdown class="log-detail__body" :body="body" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import AppDate from '@/components/basics/AppDate/AppDate.vue';
import AppMarkdown from '@/components/basics/AppMarkdown/AppMarkdown.vue';
export default Vue.extend({
  name: 'LogDetail',
  components: {
    AppMarkdown,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.log-detail {
  color: inherit;
}
</style>
