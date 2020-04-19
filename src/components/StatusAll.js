import React  from 'react';
import StatusList from'./StatusList.js';
class StatusAll extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      newStatusText: '',
      statuses: [
        "aaaaaaaaaaaaaaaaaaa",
        "bbbbbbbbbbbbbbbbbbb",
        "ccccccccccccccccccc",
        "ddddddddddddddddddd"

      ]
    }
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

   }
   handlechange(ev)  {

     this.setState({newStatusText: ev.target.value});
   }
   handlesubmit(ev)  {
    ev.preventDefault();

     let newS =[this.state.newStatusText, ...this.state.statuses]
     this.setState({
       newStatusText: '',
       statuses: newS});

        console.log({newS});
   }
  render(){
    return(
      <div>
        <div className="Status">
        <h3> enter new status</h3>
              <form onSubmit={this.handlesubmit}>
                  <input type="text" placeholder="what is in your mind"
                    value={this.state.newStatusText}
                    onChange={this.handlechange} />
                  <button type="submit"> add status </button>
                </form>
            </div>
            <div className="Status">
              <h4> all status < /h4>
              <StatusList statuses={this.state.statuses} />
            </div>
      </div>

    );
  }
}
export default StatusAll;
