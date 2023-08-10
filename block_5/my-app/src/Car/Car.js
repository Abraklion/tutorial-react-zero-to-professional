import React from 'react'
import classes from './Car.css'

class Car extends React.Component {

  state = {
    isHovered: false
  };

  /**
   * вызовет жизниный цикл, прямо перед вызовом рендерингом (render) в
   * аналог устаревшего componentWillUpdate и componentWillReceiveProps
   * реализация getDerivedStateFromProps блокирует жизниные циклы componentWillReceiveProps и componentWillUpdate
   * вызовится даже есть shouldComponentUpdate вернет false
   * */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Car getDerivedStateFromProps', nextProps, prevState)

    return prevState
  }

  /**
   * вызовет жизниный цикл, когда компонент получит новые реквизиты
   * */
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('Car componentWillReceiveProps', nextProps)
  }

  /**
   * вызовет жизниный цикл, чтобы определить, можно ли пропустить повторный рендеринг
   * */
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
  }

  /**
   * вызовет жизниный цикл, перед рендерингом с новыми реквизитами или состоянием
   * */
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car componentWillUpdate', nextProps, nextState)
  }

  /**
   * вызовет жизниный цикл, непосредственно перед тем, как React обновит DOM
   * Еще имеешь доступ в старому DOM
   * */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Car getSnapshotBeforeUpdate')

    return null;
  }

  /**
   * вызовет жизниный цикл, сразу после повторного рендеринга вашего компонента с обновленными реквизитами или состоянием
   * Уже обновленный DOM
   * */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Car componentDidUpdate')
  }

  /**
   * вызовет жизниный цикл, когда ваш компонент будет удален с экрана (из DOM)
   * */
  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }

  /**
   * что вы хотите отобразить на экране
   * */
  render() {
    console.log('Car render')

    if (Math.random() > 0.7) {
      throw new Error('Car random failed')
    }

    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }

    return (
      <div className={classes.Car}>
        <h3>Сar name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          className={inputClasses.join(' ')}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Car
