import React from 'react';

export default function autofill() {

    return function (DecoratedComponent) {

        return class {

            constructor() {
                this._listeners = [];
            }

            componentDidMount() {

                const forms = React.findDOMNode(this).querySelectorAll('form');

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