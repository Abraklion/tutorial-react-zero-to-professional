import React, { Component } from 'react';
import './App.scss';

import Car from './Car/Car'
import Counter from './Counter/Counter'

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    console.log('App constructor')

    super(props);

    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  toggleCarsHandler = () => {

    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const cars = [...this.state.cars],
      car = cars[index]

    car.name = name

    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})

  }

  /**
   * вызовет жизниный цикл, сразу после constructor
   * */
  componentWillMount() {
    console.log('App componentWillMount')
  }

  /**
   * вызовет жизниный цикл, когда ваш компонент будет добавлен на экран (в DOM)
   * */
  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <hr/>

        <button
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    );

  }
}

export default App;
