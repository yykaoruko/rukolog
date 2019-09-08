import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AppDate from './AppDate.vue';

describe('AppDate', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(AppDate, {
        propsData: {
          datetime: '2019-10-07',
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
