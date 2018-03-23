import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Title', () => {
  it('renders the Title component', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });
});
