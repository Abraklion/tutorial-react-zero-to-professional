import {Component} from "react";
import style from './Layout.module.scss'

import MenuToggle from "../../components/Navigation/MenuToggle";

/**
 * Компонент {Викторина}
 **/
class Layout extends Component {

  /**
   * Состояние компонента
   **/
  state = {

    // открывает / закрывает меню
    menu: false
  }


  /**
   * Обработчик клика по бургер меню
   * @param {Object=} e - обьект события
   *
   * @return {void}
   */
  toggleMenuHandler = (e) => {
    this.setState({
      menu: !this.state.menu
    })
  }

  /**
   * Отрисовка
   **/
  render() {
    return (
      <>
        <header>
          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />
        </header>
        <main className={style.Layout}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout
