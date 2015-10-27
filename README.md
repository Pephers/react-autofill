React Autofill
==============
A component that polyfills a change event in Safari when input fields are
autofilled.

## Installation
```
npm install --save react-autofill
```

## Usage
ES2015 (aka. ES6):
```js
import React from 'react';
import ReactDOM from 'react-dom';
import autofill from 'react-autofill';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    handleChange(e) {

        const { name, value } = e.currentTarget;
        const nextState = {};

        nextState[name] = value;

        this.setState(nextState);

    }

    render() {

        return (
            <form>
                <input
                    onChange={this.handleChange.bind(this)}
                    name="field"
                    value={this.state.field}/>
            </form>
        );

    }

}

ReactDOM.render(React.createElement(autofill(Form)), document.body);

```
ES7 (aka. ES2016):
```js
@autofill
class Form extends React.Component {
    ...
}
```
