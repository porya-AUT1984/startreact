import React  from 'react';
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
export default Status;
