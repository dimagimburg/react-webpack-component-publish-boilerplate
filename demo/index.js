import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}



/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//
console.log('this is the demo inkllkdex ljkasdal asda sss #$%^#$%$#');
//
class App extends Component {
    render() {
        return (
            <h1>Hello, world... 22222</h1>
        );
    }
}
//
//ReactDOM.render(<App />, document.getElementById('root'));
*/