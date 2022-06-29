import * as React from 'react';

export class InquiriesAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allInquiries:[]
      }
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

    render(){
      return(
        <div className="container">
          <div className="main">
            <h3>Inquiries</h3>
            <div className="results-list">

            {this.state.allInquiries.map(inquiry => (
                  <div>
                    <p>ID: {inquiry.inquiry_id} | Username: {inquiry.user.username} | Animal Name: {inquiry.animal.name} | Status: {inquiry.status}</p>
                    { inquiry.status == "Pending"&&
                      <div className = "result-buttons">
                        <button>Approve</button>
                        <button>Deny</button>
                        <button>Cancel</button>
                      </div>
                    }
                    { !inquiry.status == "Pending"&&
                      <div className = "result-buttons">
                        <button>Cancel</button>
                      </div>
                    }
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