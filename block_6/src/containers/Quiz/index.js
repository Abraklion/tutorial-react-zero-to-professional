import {Component} from 'react'
import style from './Quiz.module.scss'

import ActiveQuiz from "../../components/ActiveQuiz";

/**
 * Викторина
 * */
class Quiz extends Component {
  state = {
    quiz: []
  }

  render() {
    return (
      <div className={style.Quiz}>
        <div className={style.Quiz__wrapper}>
          <h1 className={style.Quiz__title}>Quiz</h1>

          <ActiveQuiz /> {/* -> Компонент активный вопрос */}
        </div>
      </div>
    )
  }
}

export default Quiz
