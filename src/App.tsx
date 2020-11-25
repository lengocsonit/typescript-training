import * as React from 'react';
import HogeContainer from '../src/containers/hogeContainer';
import { useTranslation } from 'react-i18next'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HogeContainer />
      </div>
    );
  }
}

export default App;