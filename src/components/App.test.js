import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    const wrapper = shallow(<App location={{search: undefined}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
