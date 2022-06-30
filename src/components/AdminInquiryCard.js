import * as React from 'react';
import { CancelInquiryButton } from './CancelInquiryButton';

export class AdminInquiryCard extends React.Component{
  constructor(props){
    super(props)
  }

  submitStatus(id, status){

    let data = {
      "inquiry_id": id,
      "status": status
    }

    console.log(data);

    fetch("https://animalrescueproject.azurewebsites.net/inquiries/status", {
            method: 'PUT',
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

  }

  render() {
    return(
      <div>
        <p>ID: {this.props.inquiryId} | Username: {this.props.username} | Animal Name: {this.props.animalName} | Status: {this.props.inquiryStatus}

          { this.props.inquiryStatus == "Pending"&&
            <span>
              <button onClick={() => {this.submitStatus(this.props.inquiryId,"Approved")}}>Approve</button>
              <button onClick={() => {this.submitStatus(this.props.inquiryId,"Denied")}}>Deny</button>
              <CancelInquiryButton inquiryId={this.props.inquiryId}/>
            </span>
          }
        </p>
      </div>
    )
  }

}