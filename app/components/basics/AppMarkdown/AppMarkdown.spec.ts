import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AppMarkdown from './AppMarkdown.vue';

describe('AppMarkdown', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(AppMarkdown, {
        propsData: {
          body: 'body',
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
