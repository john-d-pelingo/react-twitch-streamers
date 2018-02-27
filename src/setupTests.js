'use strict';

// Make Enzyme functions available in all test files without importing
import Enzyme, { shallow, render, mount } from 'enzyme';
// React 16 adapter
import Adapter from 'enzyme-adapter-react-16';
// Generate snapshots using Enzyme's shallow or full DOM rendering
import enzymeToJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

global.enzymeToJson = enzymeToJson;
global.mount = mount;
global.render = render;
global.shallow = shallow;

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
