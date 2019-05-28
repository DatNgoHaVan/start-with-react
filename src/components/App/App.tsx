import React from 'react';
import logo from '../../asserts/logo.svg';
import '../../styles/sass/_app.scss';
import HelloWorld from '../HelloWorld';
import Welcome from '../Welcome';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>First React Application</h2>
      </div>
      <body>
        <p className='App-intro'>
          <HelloWorld />
        </p>
        <Button variant='contained' color='primary'>
          <Welcome name="Dard" />
        </Button>
      </body>
    </div>
  );
}

export default App;
