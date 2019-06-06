import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './Button';

test('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Button>Text</Button>, div);
   ReactDOM.unmountComponentAtNode(div);
});
