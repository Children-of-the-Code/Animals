import * as React from 'react';

import { AdminInquiryCard } from '../components/AdminInquiryCard';
import '../inquiries.css';

export class InquiriesAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state={
        pendingInquiries:[],
        approvedInquiries:[],
        deniedInquiries:[]
      }
    }

    componentDidMount(){
      this.getInquiries()
    }

    componentDidUpdate(){
    }

    getInquiries(){
      let temparray=[];
      let temparray1=[];
      let temparray2=[];

    //Get Pending inquiries

      fetch("https://animalrescueproject.azurewebsites.net/inquiries/status/Pending")
      .then(response=>response.json())
      .then(inquiry => {
        inquiry.map(inquiries => {temparray.push(inquiries)});
        this.setState({
          pendingInquiries:temparray
        }, console.log(this.state.pendingInquiries))
      })

      fetch("https://animalrescueproject.azurewebsites.net/inquiries/status/Approved")
      .then(response=>response.json())
      .then(inquiry => {
        inquiry.map(inquiries => {temparray1.push(inquiries)});
        this.setState({
          approvedInquiries:temparray1
        }, console.log(this.state.approvedInquiries))
      })

      fetch("https://animalrescueproject.azurewebsites.net/inquiries/status/Denied")
      .then(response=>response.json())
      .then(inquiry => {
        inquiry.map(inquiries => {temparray2.push(inquiries)});
        this.setState({
          deniedInquiries:temparray2
        }, console.log(this.state.deniedInquiries))
      })
    }

    render(){
      return(
        <div className="container">
          <div className="main">
            <h3>Inquiries</h3>
            <div>
              <div>
                <h5>Pending</h5>
                {this.state.pendingInquiries.map(inquiry => (
                      <AdminInquiryCard key={inquiry.inquiry_id} inquiryId={inquiry.inquiry_id} username={inquiry.user.username} animalName={inquiry.animal.name} inquiryStatus={inquiry.status}/>
                    )
                  )
                }
              </div>
              <div>
                <h5>Approved</h5>
                {this.state.approvedInquiries.map(inquiry => (
                      <AdminInquiryCard key={inquiry.inquiry_id} inquiryId={inquiry.inquiry_id} username={inquiry.user.username} animalName={inquiry.animal.name} inquiryStatus={inquiry.status}/>
                    )
                  )
                }
              </div>
              <div>
                <h5>Denied</h5>
                {this.state.deniedInquiries.map(inquiry => (
                      <AdminInquiryCard key={inquiry.inquiry_id} inquiryId={inquiry.inquiry_id} username={inquiry.user.username} animalName={inquiry.animal.name} inquiryStatus={inquiry.status}/>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
}