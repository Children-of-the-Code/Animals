import * as React from 'react';
import { CancelInquiryButton } from './CancelInquiryButton';

export class UserInquiryCard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <p>Name: {this.props.animalName} | Fee: {this.props.animalFee} | Status: {this.props.inquiryStatus}</p>
        <CancelInquiryButton inquiryId={this.props.inquiryId}/>
      </div>
    )
  }
}