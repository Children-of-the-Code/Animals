import * as React from 'react';

export class CancelInquiryButton extends React.Component{
  constructor(props){
    super(props)
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

  render(){
    return(
      <button className="loginbutton" onClick={() => {this.cancelInquiry(this.props.inquiryId)}}>Cancel</button>
    )
  }

}