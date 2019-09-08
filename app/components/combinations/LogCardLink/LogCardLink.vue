<template>
  <nuxt-link :to="to" class="log-card-link">
    <div class="log-card-link__wrap">
      <log-title :title="title" />
      <app-date :datetime="datetime" />
      <log-description :text="description" />
      <log-tag-list :tags="tags" />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import AppDate from '@/components/basics/AppDate/AppDate.vue';
import LogDescription from '@/components/basics/LogDescription/LogDescription.vue';
import LogTitle from '@/components/basics/LogTitle/LogTitle.vue';
import LogTagList from '@/components/combinations/LogTagList/LogTagList.vue';
export default Vue.extend({
  name: 'LogCardLink',
  components: {
    AppDate,
    LogDescription,
    LogTitle,
    LogTagList,
  },
  props: {
    datetime: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.log-card-link {
  display: block;
  color: inherit;
}
</style>
