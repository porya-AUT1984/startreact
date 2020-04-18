import React  from 'react';
import logo from './logo.svg';
import './App.css';


class Status extends React.Component {
  constructor() {
    super();
    this.state ={
    likes : 0
  }
  this.like = this.like.bind(this);
  }
  like()
   {
     this.setState({
          likes : this.state.likes+1
})
   }
  render(){
    return(
        <div className="Status">
            <p> {this.props.t} </p>
            <p> <button onClick={this.like}>
             {this.state.likes} like </button> </p>

        </div>

    );
  }
}


class App extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">

          <Status  t="wwwwwwwwwwwwwwwwww" />
          <Status t="ddddddddddeeeeeeeee" />

      </header>
    </div>
  );
}
}

export default App;
