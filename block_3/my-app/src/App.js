import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  /**
   *  Урок 1. Создание State
   **/
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  /**
   *  Урок 2. Добавление событий
   *  оф дока: https://react.dev/reference/react-dom/components/common
   **/
  changeTitleHandler = (newTitle) => {
    /**
     *  Урок 3. Изменение State
     *  метод setState изменяет состаяние
     **/
    this.setState({
      pageTitle: newTitle
    })
  }

  handlerInput = (evt) => {

    this.setState({
      pageTitle: evt.target.value
    })

  }

  // шаблон 1
  templateOne () {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        {/* Урок 5.  Обработка Input */}
        <input type="text" onChange={this.handlerInput}/>

        <button
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        >Change title</button>

        {/* Урок 6. Работа со списком (Циклы) */}
        {this.state.cars.map((car,index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        })}

        {/*<Car*/}
        {/*  name={cars[0].name}*/}
        {/*  year={cars[0].year}*/}
        {/*  onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
        {/*/>*/}

        {/*<Car*/}
        {/*  name={cars[1].name}*/}
        {/*  year={cars[1].year}*/}
        {/*  onChangeTitle={() => this.changeTitleHandler(cars[1].name)}*/}
        {/*/>*/}

        {/*<Car*/}
        {/*  name={cars[2].name}*/}
        {/*  year={cars[2].year}*/}
        {/*  onChangeTitle={() => this.changeTitleHandler(cars[2].name)}*/}
        {/*/>*/}
      </div>
    );
  }


  toggleCarsHandler = () => {

    this.setState({
      showCars: !this.state.showCars
    })
  }

  // шаблон 2
  templateTwo () {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    /**
     * Урок 7. Работа с условными операторами
     **/
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { cars }
      </div>
    );
  }

  /**
   * Урок 8. Динамические списки
   **/
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

  // шаблон 3
  templateThree () {
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
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { cars }
      </div>
    );
  }

  render() {

    return this.templateThree()

  }
}

export default App;
