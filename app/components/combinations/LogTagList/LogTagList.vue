<template>
  <ul class="log-tag-list">
    <template v-for="(item, index) in tags">
      <li :key="index" class="log-tag-list__item">
        <app-label :label="item" />
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import AppLabel from '@/components/basics/AppLabel/AppLabel.vue';
export default Vue.extend({
  name: 'LogTagList',
  components: {
    AppLabel,
  },
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.log-tag-list {
  color: inherit;
}
</style>
