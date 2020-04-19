import React , {Component} from 'react';
import Status from'./Status';

export default class StatusList extends Component {
  render(){
    return(
      this.props.statuses.map((tt , index)=> {
        return <Status key={index}  t= {tt} />
      })

    );
  }
}
