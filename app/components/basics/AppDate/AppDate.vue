<template>
  <time :datetime="datetimeValue" class="app-date">
    <span class="app-date__date">
      {{ date.year }}/{{ date.month }}/{{ date.date }}
    </span>
  </time>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  splitDatetime,
  formatToDatetimeAttribute,
} from '@/helpers/date/date.helper';
import { isLogDate } from '@/helpers/validator/validator.helper';
export default Vue.extend({
  name: 'AppDate',
  props: {
    time: {
      type: Boolean,
      default: false,
    },
    datetime: {
      type: String,
      required: true,
      validator(value) {
        return isLogDate(value);
      },
    },
  },
  computed: {
    date() {
      return splitDatetime(this.datetime);
    },
    datetimeValue() {
      return formatToDatetimeAttribute(this.datetime);
    },
  },
});
</script>

<style lang="scss" scoped>
.app-date {
  color: inherit;
}
</style>
