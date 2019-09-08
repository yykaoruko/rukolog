import Vue from 'vue';
import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils';
import LogCardLink from './LogCardLink.vue';

describe('LogCardLink', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(LogCardLink, {
        propsData: {
          datetime: '2019-10-07',
          title: 'title',
          to: 'to',
          tags: ['hoge'],
        },
        stubs: {
          NuxtLink: RouterLinkStub,
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
