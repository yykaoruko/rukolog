import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import LogList from './LogList.vue';

describe('LogList', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LogList, {
        propsData: {},
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
