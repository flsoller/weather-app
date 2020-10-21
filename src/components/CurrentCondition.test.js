import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrentCondition from './CurrentCondition';

configure({ adapter: new Adapter() });

describe('<CurrentCondition>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentCondition />);
  });
  it('renders no elements if conditions are not passed', () => {
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('renders <p> element if props passed', () => {
    wrapper.setProps({ condition: 'clear', temp: '20' });
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
