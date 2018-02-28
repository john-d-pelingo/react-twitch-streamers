import React from 'react';
import ReactDOM from 'react-dom';

import App from '../index';

describe.skip('Default suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should be selectable by class "app"', function() {
    expect(shallow(<App />).is('.app')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.app').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toContain('App Component');
  });
});
