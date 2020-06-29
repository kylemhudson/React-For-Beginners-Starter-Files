import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
    render() {
        return <p>This is the Store Picker Component</p>
    }
}

render(<StorePicker />, document.querySelector('#main'));