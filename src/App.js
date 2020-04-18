import React  from 'react';
import logo from './logo.svg';
import './App.css';


class Status extends React.Component {
  render(){
    return(
        <div className="Status">
            <p> this is my statuse ......................</p>
            <p> <button> like </button> </p>

        </div>

    );
  }
}


class App extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">

          <Status />
          <Status />

      </header>
    </div>
  );
}
}

export default App;
