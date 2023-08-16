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

    // состояние ответа (цвет пункта при клике)
    answerState: null, // { [id]: 'ActiveQuiz__item--success' } || { [id]: 'ActiveQuiz__item--error' }

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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'ActiveQuiz__item--success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      // если правильный ответ

      this.setState({
        answerState: {[answerId]: 'ActiveQuiz__item--success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)


    } else {
      // если не правильный ответ

      this.setState({
        answerState: {[answerId]: 'ActiveQuiz__item--error'}
      })
    }
  }

  /**
   * Метод проверяет закончились ли вопросы викторины
   * @return {boolean}
   **/
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
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

            state={this.state.answerState}                                 // -> меняет цвет пункта при клике на него
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
