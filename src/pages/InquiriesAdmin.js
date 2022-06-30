import * as React from 'react';

import { AdminInquiryCard } from '../components/AdminInquiryCard';
import '../inquiries.css';

export class InquiriesAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allInquiries:[]
      }
    }

    componentDidMount(){
      this.getInquiries()
    }

    componentDidUpdate(){
      this.getInquiries()
    }

    getInquiries(){
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
            <div className="inquiries-list">
            {this.state.allInquiries.map(inquiry => (
                  <AdminInquiryCard key={inquiry.inquiry_id} inquiryId={inquiry.inquiry_id} username={inquiry.user.username} animalName={inquiry.animal.name} inquiryStatus={inquiry.status}/>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}