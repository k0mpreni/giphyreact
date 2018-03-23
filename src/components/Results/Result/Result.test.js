import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';

describe('Result', () => {
  const gifInfo = {
    id: 3,
    url: 'url',
    images: { fixed_height_downsampled: { url: 'downsampled.gif' } }
  };
  it('renders the Result component', () => {
    const wrapper = shallow(<Result gifInfo={gifInfo} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders the Result component favorited', () => {
    const wrapper = shallow(<Result gifInfo={gifInfo} favorited/>);
    expect(wrapper).toMatchSnapshot();
  });
});
