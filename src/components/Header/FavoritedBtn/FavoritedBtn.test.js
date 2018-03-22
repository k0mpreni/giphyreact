import React from 'react';
import { shallow } from 'enzyme';
import FavoritedBtn from './index';

describe('FavoritedBtn', () => {
  it('renders the FavoritedBtn component', () => {
    const wrapper = shallow(<FavoritedBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
