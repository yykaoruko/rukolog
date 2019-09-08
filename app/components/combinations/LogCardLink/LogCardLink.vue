<template>
  <nuxt-link :to="to" class="log-card-link">
    <div class="log-card-link__wrap">
      <log-title class="log-card-link__wrap__title" :title="title" />
      <app-date class="log-card-link__wrap__date" :datetime="datetime" />
      <log-description
        class="log-card-link__wrap__description"
        :text="description"
      />
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import AppDate from '@/components/basics/AppDate/AppDate.vue';
import LogDescription from '@/components/basics/LogDescription/LogDescription.vue';
import LogTitle from '@/components/basics/LogTitle/LogTitle.vue';
export default Vue.extend({
  name: 'LogCardLink',
  components: {
    AppDate,
    LogDescription,
    LogTitle,
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
  border-left: 4px solid $color-sub;
  text-decoration: none;
}
.log-card-link__wrap {
  padding: 16px 24px;
  transition: all 0.2s;
  background: $color-base;
  &:hover {
    background: $color-accent;
  }
}
.log-card-link__wrap__title {
  color: $color-text;
}
.log-card-link__wrap__date {
  color: $color-text;
}
.log-card-link__wrap__description {
  display: none;
}
</style>
