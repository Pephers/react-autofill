import React from 'react';
import ReactDOM from 'react-dom';

export default function autofill() {

    return function (DecoratedComponent) {

        return class AutofillWrapper extends React.Component {

            constructor(props, context) {

                super(props, context);

                this._listeners = [];

            }

            componentDidMount() {

                const forms = ReactDOM.findDOMNode(this).querySelectorAll('form');

                [].forEach.call(forms, (form) => {
                    [].forEach.call(form.elements, (element) => {

                        if (element.name === '') {
                            return;
                        }

                        this._listeners.push(setInterval(function () {

                            if (this._previousValue === this.element.value) {
                                return;
                            }

                            this._previousValue = this.element.value;

                            const evt = document.createEvent('HTMLEvents');
                            evt.initEvent('input', true, true);
                            this.element.dispatchEvent(evt);

                        }.bind({ element }), 20));

                    });
                });

            }

            componentWillUnmount() {

                this._listeners.forEach(function (listener) {
                    clearInterval(listener);
                });

            }

            render() {
                return <DecoratedComponent {...this.props}/>;
            }

        }
    }
}
