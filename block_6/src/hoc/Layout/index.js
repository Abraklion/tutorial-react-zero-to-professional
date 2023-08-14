import {Component} from "react";
import style from './Layout.module.scss'


/**
 * Компонент {Викторина}
 **/
class Layout extends Component {

  /**
   * Отрисовка
   **/
  render() {
    return (
      <>
        <main className={style.Layout}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout
