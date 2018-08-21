import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../../components/ExpenseDashboard';

test('should render Header correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').length).toBe(1)
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
});
