import {Component} from 'react'
import style from './Quiz.module.scss'

class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={style.Quiz}>
        <h1 className={style.Quiz__title}>Quiz</h1>
      </div>
    )
  }
}

export default Quiz
