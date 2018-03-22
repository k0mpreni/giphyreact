import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

describe('Search', () => {
  it('renders the Search component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});