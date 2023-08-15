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
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {text: 'Черный',  id: 1},
          {text: 'Синий',   id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      }
    ]
  }

  /**
   * Обработчик клика по ответу на вопрос
   * @param {number} answerId - id ответа
   * @param {Object=} e - обьект события
   *
   * @return {void}
   */
  onAnswerClickHandler = (answerId, e) => {
    console.log('Answer Id: ', answerId)
  }

  /**
   * Отрисовка
   **/
  render() {
    return (
      <div className={style.Quiz}>
        <div className={style.Quiz__wrapper}>
          <h1 className={style.Quiz__title}>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          /> {/* -> Компонент активный вопрос */}

        </div>
      </div>
    )
  }
}

export default Quiz
