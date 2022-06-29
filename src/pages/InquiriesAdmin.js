import * as React from 'react';

import '../inquiries.css';

export class InquiriesAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allInquiries:[]
      }

      this.setStatus = this.setStatus.bind(this);
      this.refreshPage = this.refreshPage.bind(this);
    }

    componentDidMount(){

      let temparray=[];

      fetch("https://animalrescueproject.azurewebsites.net/inquiries/")
      .then(response=>response.json())
      .then(inquiry => {
        inquiry.map(inquiries => {temparray.push(inquiries)});
        this.setState({
          allInquiries:temparray
        }, console.log(this.state.allInquiries))
      })
    }

    refreshPage() {
      window.location.reload(false);
    }

    setStatus(id, status){

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

          this.refreshPage();

    }

    render(){
      return(
        <div className="container">
          <div className="main">
            <h3>Inquiries</h3>
            <div>
            {this.state.allInquiries.map(inquiry => (
                  <div className="flex-container">
                    <div className="flex-item">
                    <p>ID: {inquiry.inquiry_id} | Username: {inquiry.user.username} | Animal Name: {inquiry.animal.name} | Status: {inquiry.status}</p>
                    </div>
                    <div className="flex-item">
                    { inquiry.status == "Pending"&&
                      <span className = "result-buttons">
                        <button onClick={() => {this.setStatus(inquiry.inquiry_id,"Approved")}}>Approve</button>
                        <button onClick={() => {this.setStatus(inquiry.inquiry_id,"Denied")}}>Deny</button>
                        <button onClick={() => {this.setStatus(inquiry.inquiry_id,"Cancelled")}}>Cancel</button>
                      </span>
                    }
                    { inquiry.status == "Approved"&&
                      <span className = "result-buttons">
                        <button onClick={() => {this.setStatus(inquiry.inquiry_id,"Cancelled")}}>Cancel</button>
                      </span>
                    }
                    { inquiry.status == "Denied"&&
                      <span className = "result-buttons">
                        <button onClick={() => {this.setStatus(inquiry.inquiry_id,"Cancelled")}}>Cancel</button>
                      </span>
                    }
                    </div>
                  </div>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}