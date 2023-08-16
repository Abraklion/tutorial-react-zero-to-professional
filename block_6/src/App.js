import Layout from './hoc/Layout';

import Quiz from './containers/Quiz';

/**
 * Точка входа
 **/
function App() {

  /**
   * Отрисовка
   **/
  return (
    <Layout>
      <Quiz/> {/* -> Компонент викторина */}
    </Layout>
  );
}

export default App;
