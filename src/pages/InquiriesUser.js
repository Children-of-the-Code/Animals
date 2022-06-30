import * as React from 'react';
import { UserInquiryCard } from '../components/UserInquiryCard';

export class InquiriesUser extends React.Component{
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

      if (this.props.userid){
        fetch("https://animalrescueproject.azurewebsites.net/inquiries/user/"+this.props.userid)
        .then(response=>response.json())
        .then(inquiry => {
          inquiry.map(inquiries => {temparray.push(inquiries)});
          this.setState({
            allInquiries:temparray
          }, console.log(this.state.allInquiries))
        })
      }
    }

    render() {
      return(
        <div className="container">
          <div className="main">
            <h3>Inquiries</h3>
            <div className="results-list">

            {this.state.allInquiries.map(inquiry => (
                  <UserInquiryCard key={inquiry.inquiry_id} inquiryId={inquiry.inquiry_id} animalName={inquiry.animal.name} animalFee={inquiry.animal.fee} inquiryStatus={inquiry.status}/>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}