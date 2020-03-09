import React from 'react'
import styled from 'styled-components/macro'
import { enzymeFind } from 'styled-components/test-utils'
import { mount, shallow } from 'enzyme'
import BootModal, { SModal, FAB } from './bootstrap-modal'

describe('React-Bootstrap Modal', () => {
  let wrapper
  let FABWrapper
  let sModalWrapper

  afterEach(() => {
    wrapper.unmount()
  })

  describe('BootModal', () => {
    beforeEach(() => {
      wrapper = mount(<BootModal></BootModal>)
    })

    it('is rendered by default', () => {
      expect(wrapper.name()).toBe('BootModal')
    })
  })

  describe('FAB', () => {
    beforeEach(() => {
      wrapper = mount(<BootModal></BootModal>)
      FABWrapper = mount(<FAB />)
    })

    it('is rendered by default', () => {
      expect(wrapper.find('bootstrap-modal__FAB')).toHaveLength(1)
    })

    it('matches the snapshot', () => {
      expect(FABWrapper.find('bootstrap-modal__FAB')).toMatchInlineSnapshot(
        `ReactWrapper {}`
      )
    })

    // it('it calls setToggle() click handler', () => {});
    // it('renders a modal when clicked', () => {/* domNode.length === 1 */});
    // it('does not change position when the modal is toggled', () => {});
    // test('whether the button is accessible when the modal is visible', () => {});
  })

  describe('Modal', () => {
    beforeEach(() => {
      wrapper = shallow(<BootModal></BootModal>)
    })

    it('is not visible by default', () => {
      expect(wrapper.find('bootstrap-modal__SModal')).toHaveLength(1)
    })

    //it('it matches the snapshot when clicked', () => {});
    //it('it has a body element rendered as a button', () => {});
    //test('whether clicking the body calls setToggle() handler', () => {});
  })
})

/*
WORKING SOLUTIONS
  1. using the babel-macro via 'styled-components/macro' import.
     https://styled-components.com/docs/tooling#babel-macro

  import styled from 'styled-components/macro';
    instead of
  import styled from 'styled-components/';

  Now you can search directly for displayname:
    expect(wrapper.find('bootstrap-modal__FAB')).toHaveLength(1);


import Foo from '../components/Foo';

COMPONENT CONSTRUCTORS
const wrapper = mount(<MyComponent />);
expect(wrapper.find(Foo)).to.have.lengthOf(1);

DISPLAY NAME
const wrapper = mount(<MyComponent />);
expect(wrapper.find('Foo')).to.have.lengthOf(1)


STILL TO CHECK OUT
Anyway, I was able to replicate the same problem, however, there are two workarounds:

Instead of using shallow, you can mount the component and then assert: expect(wrapper.find("StyledComponent > ul")).toHaveLength(1);.
Instead of mounting the component, you can import StyledList from 'path/to/styledList'; and then assert: expect(wrapper.find(StyledList)).toHaveLength(1)
*/
