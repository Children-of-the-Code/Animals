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
                  <p>ID: {inquiry.inquiry_id} | Status: {inquiry.status} | Name: {inquiry.animal.name}</p>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}