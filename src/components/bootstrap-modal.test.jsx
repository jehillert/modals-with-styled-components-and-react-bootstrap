import React from 'react'
import styled from 'styled-components/macro'
import { mount, shallow } from 'enzyme'
import BootModal from './bootstrap-modal'

let wrapper
describe('BootModal', () => {
  afterEach(() => { wrapper.unmount() });

  it('renders', () => {
    wrapper = mount(<BootModal></BootModal>)
    expect(wrapper.name()).toBe('BootModal')
  })

  it('renders with a styled FAB subcomponent', () => {
    wrapper = mount(<BootModal></BootModal>)
    expect(wrapper.find('bootstrap-modal__FAB')).toHaveLength(1)
  })

  it('renders with a styled modal subcomponent', () => {
    wrapper = shallow(<BootModal></BootModal>)
    expect(wrapper.find('bootstrap-modal__SModal')).toHaveLength(1)
  })

  it('hides the modal subcomponent by default', () => {
    wrapper = shallow(<BootModal></BootModal>)
    expect(wrapper.find('bootstrap-modal__SModal').prop('show')).toBe(false);
  });

  it('unhides the modal subcomponent when FAB is clicked', () => {
    wrapper = mount(<BootModal></BootModal>)
    wrapper.find('bootstrap-modal__FAB').simulate('click')
    expect(wrapper.find('bootstrap-modal__SModal').prop('show')).toBe(true)
  })

  it('contains a FAB matching the inline snapshot', () => {
    wrapper = mount(<BootModal></BootModal>)
    expect(wrapper.find('bootstrap-modal__FAB')).toMatchInlineSnapshot(`
      <bootstrap-modal__FAB
        onClick={[Function]}
      >
        <Button
          active={false}
          className="bootstrap-modal__FAB-sc-1we8kp5-3 ccRgQu"
          disabled={false}
          onClick={[Function]}
          type="button"
          variant="primary"
        >
          <button
            className="bootstrap-modal__FAB-sc-1we8kp5-3 ccRgQu btn btn-primary"
            disabled={false}
            onClick={[Function]}
            type="button"
          />
        </Button>
      </bootstrap-modal__FAB>
    `)
  })

  it('contains a modal subcomponent matching the inline snapshot', () => {
    wrapper = shallow(<BootModal></BootModal>)
    expect(wrapper.find('bootstrap-modal__SModal')).toMatchInlineSnapshot(`
      <bootstrap-modal__SModal
        animation={false}
        keyboard={true}
        show={false}
      >
        <bootstrap-modal__SModalHeader>
          Header
        </bootstrap-modal__SModalHeader>
        <bootstrap-modal__SModalBody
          onClick={[Function]}
        >
          Click Me
        </bootstrap-modal__SModalBody>
        <ModalFooter>
          Footer
        </ModalFooter>
      </bootstrap-modal__SModal>
    `)
  })

  // it('does not move', () => {})

})
