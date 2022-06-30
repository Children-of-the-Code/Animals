import * as React from 'react';

export class TransactionUserCard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <p>Date: {this.props.date} | Amount: {this.props.amount} | Type: Donation</p>
    )
  }

}