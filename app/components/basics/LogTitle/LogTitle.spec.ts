import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import LogTitle from './LogTitle.vue';

describe('LogTitle', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LogTitle, {
        propsData: {
          title: 'title',
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
