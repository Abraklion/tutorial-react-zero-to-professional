import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );

    // Как под капотом работает JXS на примере кода сверху
    return React.createElement(
      'div',
      {
        className: 'App'
      },

      React.createElement(
        'header',
        {
          className: 'App-header'
        },

        React.createElement(
          'img',
          {
            className: 'App-logo',
            src: logo,
            alt: logo
          },
          null
        ),
        React.createElement(
          'p',
          null,
          'Edit ',

          React.createElement(
            'code',
            null,
            'src/App.js'
          ),

          ' and save to eload'
        ),
        React.createElement(
          'a',
          {
            className: 'App-link',
            href: 'https://reactjs.org',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Learn React'
        )

      )

    )
  }
}

export default App;
