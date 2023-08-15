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

    // активный вопрос
    activeQuestion: 0,

    // вопросы викторины
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {text: 'Черный',  id: 1},
          {text: 'Синий',   id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зеленый', id: 4}
        ]
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        answers: [
          {text: '1700', id: 1},
          {text: '1702', id: 2},
          {text: '1703', id: 3},
          {text: '1803', id: 4}
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

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
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

            question={this.state.quiz[this.state.activeQuestion].question} // -> вопрос
            answers={this.state.quiz[this.state.activeQuestion].answers}   // -> варианты ответов

            answerNumber={this.state.activeQuestion + 1}                   // -> номер вопроса
            quizLength={this.state.quiz.length}                            // -> всего вопросов

            onAnswerClick={this.onAnswerClickHandler}                      // -> обработчик клика по ответу на вопрос

          /> {/* -> Компонент активный вопрос */}

        </div>
      </div>
    )
  }
}

export default Quiz
