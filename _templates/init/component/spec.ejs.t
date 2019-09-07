---
to: app/components/<%= category %>/<%= filename %>/<%= filename %>.spec.ts
---
import Vue from 'vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import <%= filename %> from './<%= filename %>.vue';

describe('<%= filename %>', () => {
  describe('mount', () => {
    let wrapper: Wrapper<Vue>;

    beforeEach(() => {
      wrapper = shallowMount(<%= filename %>, {
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
