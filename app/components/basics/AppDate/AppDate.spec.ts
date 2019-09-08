import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AppDate from './AppDate.vue';

describe('AppDate', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(AppDate, {
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
