<template>
  <div class="log-list">
    <template v-for="(item, index) in logList">
      <LogCardLink :key="index" v-bind="logCardLinkProps(item)" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LogCardLink from '@/components/combinations/LogCardLink/LogCardLink.vue';
import { logDate as logDateReg } from '@/constants/regex';
const jsonData = require('@/contents/dist/summary.json');
type LogItem = {
  base: string;
  created_at: string;
  dir: string;
  ext: string;
  sourceBase: string;
  sourceExt: string;
  tag: string[] | null;
  title: string;
};
type LogCardLinkPropsType = {
  datetime: string;
  description: string;
  to: string;
  title: string;
  tags: string[] | [];
};
export default Vue.extend({
  name: 'LogList',
  components: {
    LogCardLink,
  },
  data() {
    return {
      logList: jsonData.fileMap,
    };
  },
  methods: {
    logCardLinkProps(item: LogItem): LogCardLinkPropsType {
      const datetime = this.getDatetime(item.base);
      return {
        datetime: datetime,
        // TODO: description
        description: '',
        to: `/logs/${datetime}`,
        title: item.title,
        tags: item.tag === null ? [] : item.tag,
      };
    },
    getDatetime(value: string): string {
      const match = value.match(logDateReg);
      if (match !== null) {
        return match[0];
      } else {
        throw 'yabaiyo';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.log-list {
  color: inherit;
}
</style>
