import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import LogDetail from './LogDetail.vue';

describe('LogDetail', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LogDetail, {
        propsData: {
          body: 'body',
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
