import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AppLabel from './AppLabel.vue';

describe('AppLabel', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(AppLabel, {
        propsData: {
          label: 'label',
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
