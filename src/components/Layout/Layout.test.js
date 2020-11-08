// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import Layout from './Layout';
import type { RenderCallback } from '../../types';

describe('Layout', () => {
  const props = {
    ...siteMetadata,
    children: 'test',
    description: 'test',
    title: 'test',
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Layout with socialImage', () => {
  const props = {
    ...siteMetadata,
    children: 'test',
    description: 'test',
    title: 'test',
    socialImage: 'socialImage',
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly with socialImage', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
