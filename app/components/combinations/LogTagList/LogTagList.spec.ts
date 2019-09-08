import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import LogTagList from './LogTagList.vue';

describe('LogTagList', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LogTagList, {
        propsData: {
          tags: ['hoge', 'huga'],
        },
      });
    });

    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
