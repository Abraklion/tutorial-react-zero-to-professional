import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

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

    /**
     *  Урок 1. Как под капотом работает JXS на примере кода сверху
     **/
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

    /**
     *  Урок 2.  Ограничения JSX
     *
     *  1 - нет атрибута class есть className
     *  2 - нельзя выводить два корневых элемента одновременно
    **/

  }
}

/**
 *  Урок 3. Inline-стили JSX
 **/
class AppInline extends Component {
  render() {

    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1 style={{color: 'blue', fontSize: '32px'}}>Hello world!</h1>

        <Car name={'Ford'} year={2018} />
        <Car name="Audi" year={2016} />
        <Car name={'Mazda'} year={2010} />
      </div>
    );

  }

}

export default App;

export { AppInline };

