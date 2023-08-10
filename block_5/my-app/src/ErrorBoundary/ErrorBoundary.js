import React from 'react'

export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  /**
   * вызовет жизниный цикл, когда какой-либо дочерний компонент
   * (включая удаленные дочерние элементы) выдает ошибку во время рендеринга
   * */
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }


  render() {
    if (this.state.hasError) {
      return <h4 style={{color: 'red'}}>Something went wrong</h4>
    }

    return this.props.children
  }
}
