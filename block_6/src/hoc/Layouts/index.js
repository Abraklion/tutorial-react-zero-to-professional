import {Component} from "react";

class Layouts extends Component {

  /**
  * Отрисовка
  **/
  render() {
    return (
      <>
        <main>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layouts
