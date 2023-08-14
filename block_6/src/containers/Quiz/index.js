import {Component} from 'react'
import style from './Quiz.module.scss'

import ActiveQuiz from "../../components/ActiveQuiz";

/**
 * Компонент {Викторина}
 **/
class Quiz extends Component {

  /**
   * Состояние компонента
   **/
  state = {
    quiz: [
      {
        answers: [
          {text: 'Вопрос 1'},
          {text: 'Вопрос 2'},
          {text: 'Вопрос 3'},
          {text: 'Вопрос 4'}
        ]
      }
    ]
  }

  /**
   * Отрисовка
   **/
  render() {
    return (
      <div className={style.Quiz}>
        <div className={style.Quiz__wrapper}>
          <h1 className={style.Quiz__title}>Ответьте на все вопросы</h1>

          <ActiveQuiz answers={this.state.quiz[0].answers} /> {/* -> Компонент активный вопрос */}

        </div>
      </div>
    )
  }
}

export default Quiz
