import React from 'react';
import Modal from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Modal gif='' onToggleFavorite='' hrefLink={true}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});