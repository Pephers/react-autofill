React Autofill
==============
A component that polyfills a change event in Safari when input fields are
autofilled.

## Installation
```
npm install --save react-autofill
```

## Usage
```
import React from 'react';
import autofill from 'react-autofill';


class Form extends React.Component() {

    handleChange(e) {

        const { name, value } = e.currentTarget;
        console.log(name, value);

    }

    render() {

        return (
            <form>
                <input
                    onChange={this.handleChange.bind(this)}
                    name="field"
                    value={this.state.value}/>
            </form>
        );

    }

}

React.render(autofill(Form), document.body);

```
