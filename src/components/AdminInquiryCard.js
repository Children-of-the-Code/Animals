import * as React from 'react';

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

  cancelInquiry(id){ // Delete inquiry from system
    fetch("https://animalrescueproject.azurewebsites.net/inquiries/delete/"+id, {
      method: 'DELETE',
      mode: "cors",
      headers:{
          'Content-Type': 'application/json'
      }
      })
      .then(response=>response.json())
      .then(console.log("Inquiry with the ID " + id + " deleted."))
  }

  render() {
    return(
      <div className="flex-container">
        <div className="flex-item">
        <p>ID: {this.props.inquiryId} | Username: {this.props.username} | Animal Name: {this.props.animalName} | Status: {this.props.inquiryStatus}</p>
        </div>
        <div className="flex-item">
          { this.props.inquiryStatus == "Pending"&&
            <span className = "result-buttons">
              <button onClick={() => {this.submitStatus(this.props.inquiryId,"Approved")}}>Approve</button>
              <button onClick={() => {this.submitStatus(this.props.inquiryId,"Denied")}}>Deny</button>
              <button onClick={() => {this.cancelInquiry(this.props.inquiryId)}}>Cancel</button>
            </span>
          }
          { this.props.inquiryStatus == "Approved"&&
            <span className = "result-buttons">
              <button onClick={() => {this.cancelInquiry(this.props.inquiryId)}}>Cancel</button>
            </span>
          }
          { this.props.inquiryStatus == "Denied"&&
            <span className = "result-buttons">
              <button onClick={() => {this.cancelInquiry(this.props.inquiryId)}}>Cancel</button>
            </span>
          }
        </div>
      </div>
    )
  }

}