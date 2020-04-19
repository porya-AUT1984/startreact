import React  from 'react';

import './App.css';
import StatusAll from'./components/StatusAll.js';



class App extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">

          <StatusAll />


      </header>
    </div>
  );
}
}

export default App;
