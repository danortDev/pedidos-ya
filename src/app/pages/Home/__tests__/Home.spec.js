import React from 'react';
import Home from '../';
import { shallow } from 'enzyme';


describe('<Home/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
