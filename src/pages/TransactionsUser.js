import * as React from 'react';

export class TransactionsUser extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
          User Transactions Page
          <div>
            User ID: {this.props.userid}
          </div>
        </div>
      )
    }
}

