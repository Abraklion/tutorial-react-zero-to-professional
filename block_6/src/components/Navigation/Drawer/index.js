import React, {Component} from 'react'
import style from './Drawer.module.scss'

import Backdrop from "../../UI/Backdrop";

const links = [
  1, 2, 3
]

/**
 * Компонент {Меню}
 * */
class Drawer extends Component {

  /**
   * Генерирует ссылки
   * */
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li className={style.Drawer__item} key={index}>
          <a href={`${link}`} className={style.Drawer__link}>Link {link}</a>
        </li>
      )
    })
  }

  /**
   * Отрисовка
   **/
  render() {
    const cls = [style.Drawer]

    if (!this.props.isOpen) {
      cls.push(style.close)
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul className={style.Drawer__menu}>
            { this.renderLinks() }
          </ul>
        </nav>

        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </>
    )
  }
}

export default Drawer
