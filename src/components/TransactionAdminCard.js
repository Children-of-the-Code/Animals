import * as React from 'react';

export class TransactionAdminCard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <p>ID: {this.props.transactionId} | Username: {this.props.username} | Date: {this.props.date} | Amount: {this.props.amount} | Type: Donation</p>
    )
  }

}