import {Component} from 'react'
import style from './Quiz.module.scss'

import ActiveQuiz from "../../components/ActiveQuiz";
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

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
    ],

    // закончена ли викторины
    isFinished: false,

    // результаты викторины
    results: {}, // {[id]: success error}

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
      // предотвращает двойное нажатия на правильный вопрос викторины
      const key = Object.keys(this.state.answerState)[0]

      if (this.state.answerState[key] === 'ActiveQuiz__item--success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion],
          results = this.state.results

    if (question.rightAnswerId === answerId) {
      // если правильный ответ

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: {[answerId]: 'ActiveQuiz__item--success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          // ответил на все вопросы викторины
          this.setState({
            isFinished: true
          })
        } else {
          // переключает на следующий вопрос викторины
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)


    } else {
      // если не правильный ответ
      results[question.id] = 'error'

      this.setState({
        answerState: {[answerId]: 'ActiveQuiz__item--error'},
        results
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
   * Метод сбрасывает состояние (state) в начальное состояние компонента
   * @return {void}
   **/
  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  /**
   * Отрисовка
   **/
  render() {

    const component =  this.state.isFinished ?
      //-> Компонент финиш викторины
      <FinishedQuiz
        results={this.state.results}                                   // -> результаты викторины
        quiz={this.state.quiz}                                         // -> вопросы викторины
        onRetry={this.retryHandler}                                    // -> обработчик клика по кнопке повторить
      />
      :
      //-> Компонент активный вопрос
      <ActiveQuiz
        question={this.state.quiz[this.state.activeQuestion].question} // -> вопрос
        answers={this.state.quiz[this.state.activeQuestion].answers}   // -> варианты ответов

        state={this.state.answerState}                                 // -> меняет цвет пункта при клике на него
        answerNumber={this.state.activeQuestion + 1}                   // -> номер вопроса
        quizLength={this.state.quiz.length}                            // -> всего вопросов

        onAnswerClick={this.onAnswerClickHandler}                      // -> обработчик клика по ответу на вопрос
      />

    return (
      <div className={style.Quiz}>
        <div className={style.Quiz__wrapper}>
          <h1 className={style.Quiz__title}>Ответьте на все вопросы</h1>

          {component}

        </div>
      </div>
    )
  }
}

export default Quiz
