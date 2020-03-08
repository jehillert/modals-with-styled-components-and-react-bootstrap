import React from 'react';
import renderer, { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { cookieId } from '../data/constants';
import defaultData from '../data/defaultData';
import Card from '../components/card';
import Form from '../components/form';
import 'jest-styled-components';

let wrapper;

beforeAll(() => {
  document.cookie = '';
});

beforeEach(() => {
  wrapper = mount(<Form roomsData={defaultData} cookieId={cookieId} />);
});

afterEach(() => {
  wrapper.unmount();
});

/* 1. By default, the 'Adult' and 'Children' drop-down fields for rooms 2, 3, and 4
      should be disabled.  Upon checking the checkbox of room 2, the drop-down fields
      associated with room 2 should be enabled. */

describe('default form control state', () => {
  const cases = [
    ['#adults-dropdown-2', [1, 2]],
    ['#adults-dropdown-3', [1, 2]],
    ['#adults-dropdown-4', [1, 2]],
    ['#children-dropdown-2', [0, 1, 2]],
    ['#children-dropdown-3', [0, 1, 2]],
    ['#children-dropdown-4', [0, 1, 2]],
  ];

  test.each(cases)(
    'whether %p is disabled by default and has field values of %p',
    (dropdown, values) => {
      expect(wrapper.find(dropdown).props().choices).toEqual(values);
      expect(wrapper.find(dropdown).props().disabled).toBe(true);
  },
);
});

describe('form control behavior', () => {
  const cases = [
    ['#s-checkbox-2', '#adults-dropdown-2'],
    ['#s-checkbox-3', '#adults-dropdown-3'],
    ['#s-checkbox-4', '#adults-dropdown-4'],
    ['#s-checkbox-2', '#children-dropdown-2'],
    ['#s-checkbox-3', '#children-dropdown-3'],
    ['#s-checkbox-4', '#children-dropdown-4'],
  ];

  test.each(cases)(
    'whether checking %p enables %p',
    (checkbox, dropdown) => {
      wrapper.find(checkbox).at(1).simulate('change');
      expect(wrapper.find(dropdown).props().disabled).toBe(false);
    },
  );
});

/* 2. If the user checks the 'Room 3' checkbox, Room 2 should auto-check. (See
      Figure B in screenshot). If the user checks the 'Room 4' checkbox, Room 2 and
      Room 3 should auto-check. */

describe('relationship between checkboxes', () => {
  test('whether 2nd checkbox autochecks in response to checking of 3rd checkbox', () => {
    expect(wrapper.find('#s-checkbox-2').at(1).props().checked).toEqual(false);
    wrapper.find('#s-checkbox-3').at(1).simulate('change');
    expect(wrapper.find('#s-checkbox-2').at(1).props().checked).toEqual(true);
  });
  test('whether 2nd checkbox autochecks in response to checking of 4rd checkbox', () => {
    expect(wrapper.find('#s-checkbox-2').at(1).props().checked).toEqual(false);
    wrapper.find('#s-checkbox-3').at(1).simulate('change');
    expect(wrapper.find('#s-checkbox-2').at(1).props().checked).toEqual(true);
  });
  test('whether 3nd checkbox autochecks in response to checking of 4rd checkbox', () => {
    expect(wrapper.find('#s-checkbox-3').at(1).props().checked).toEqual(false);
    wrapper.find('#s-checkbox-3').at(1).simulate('change');
    expect(wrapper.find('#s-checkbox-3').at(1).props().checked).toEqual(true);
  });
});


describe('Form', () => {

  it('Calls "handleSubmit()" when S.SubmitButton clicked', () => {
    const mockedHandleSubmit = jest.fn();
    let rendered;
    act(() => {
      rendered = create(<Form onSubmit={mockedHandleSubmit} />);
    });

    rendered.findByType('input').props.onSubmit();

    expect(mockedHandleSubmit).toHaveBeenCalled();
  });
});
