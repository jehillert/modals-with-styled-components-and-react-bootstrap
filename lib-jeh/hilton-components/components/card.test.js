import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import card from '../components/Card';
import 'jest-styled-components';

describe('relationship between checkboxes', () => {
  const dispatch = () => jest.fn();

  const roomChecked = {
    id: 2,
    isChecked: true, // enables
    adults: 1,
    children: 0,
  };

  const roomUnchecked = {
    id: 2,
    isChecked: false, // enables
    adults: 1,
    children: 0,
  };

  test('whether Card 2 has the correct styles when enabled', () => {
    const wrapper = renderer.create(<Card key={2} room={roomChecked} dispatch={dispatch} />).toJSON();
    expect(wrapper).toHaveStyleRule('background-color', '#E6E6E6');
    expect(wrapper).toHaveStyleRule('border', '0.25rem solid #E6E6E6');

    const gotten = render(<Card key={2} room={roomChecked} dispatch={dispatch} />);
    expect(gotten.getByTestId('s-card-header')).toHaveStyleRule('background-color', '#E6E6E6');
    expect(gotten.getByTestId('s-card-body')).toHaveStyleRule('background-color', '#FFFFFF');
  });

  test('whether Card 2 has the correct styles when disabled', () => {
    const wrapper = renderer.create(<Card key={2} room={roomUnchecked} dispatch={dispatch} />).toJSON();
    expect(wrapper).toHaveStyleRule('background-color', '#DADAE2');
    expect(wrapper).toHaveStyleRule('border', '0.25rem solid #CBCFD9');

    const gotten = render(<Card key={2} room={roomUnchecked} dispatch={dispatch} />);
    expect(gotten.getByTestId('s-card-header')).toHaveStyleRule('background-color', 'transparent');
    expect(gotten.getByTestId('s-card-body')).toHaveStyleRule('background-color', 'transparent');
  });
});

/* Snapshots */

describe('the relationship between selected state and appearance', () => {
  it('renders enabled state correctly', () => {
    const disabled = false;
    const key = 1;
    const dispatch = () => jest.fn();
    const room = {
      id: 2,
      isChecked: false,
      adults: 1,
      children: 0,
    };
    const wrapper = renderer
      .create(<Card disabled={disabled} key={key} room={room} dispatch={dispatch} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders disabled state correctly', () => {
    const disabled = true;
    const key = 1;
    const dispatch = () => jest.fn();
    const room = {
      id: 2,
      isChecked: false,
      adults: 1,
      children: 0,
    };
    const wrapper = renderer
      .create(<Card disabled={disabled} key={key} room={room} dispatch={dispatch} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
