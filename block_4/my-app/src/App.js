import React, { Component } from 'react';
import './App.scss';

import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  handlerInput = (evt) => {

    this.setState({
      pageTitle: evt.target.value
    })

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

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

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
