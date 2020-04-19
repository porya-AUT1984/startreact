import React  from 'react';
class Status extends React.Component {
  constructor() {
    super();
    this.state ={
    likes : 0
  }
  this.like = this.like.bind(this);
  this.delete = this.delete.bind(this);
  }
  like()
   {
     this.setState({
          likes : this.state.likes+1

})
   }
   delete()
   {
     console.log('delete', this.props.index )
     this.props.delete(this.props.index)
   }
  render(){
    return(
        <div className="Status">
            <div className="close"
              onClick={this.delete}  > X </div>

            <p> {this.props.t} </p>
            <p> <button onClick={this.like}>
             {this.state.likes} like </button> </p>

        </div>

    );
  }
}
export default Status;
