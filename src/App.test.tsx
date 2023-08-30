import { render } from '@testing-library/react';
import React from 'react';
import AppSocialNet from './App';


describe('testing App', () => {
  it("component be should render", () => {
    render(<AppSocialNet />)
  })
})