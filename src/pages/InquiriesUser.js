import * as React from 'react';
import {Link} from 'react-router-dom';
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
          <div className="sidenav">
          <Link className="view-inquiries-link" to="/UserProfile">User Profile</Link>
            { this.props.userrole==="User"&&
              // Role == User ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                //View Inquiries - /InquiriesUser
                  //List inquiries made by user. Needs: userid
                  <div>
                    <hr></hr>
                    <Link className="view-transactions-link" to="/TransactionsUser">View Transactions</Link>
                    <hr></hr>
                    <Link className="view-inquiries-link" to="/InquiriesUser">View Inquiries</Link>
              </div>
            }
            

            
            { this.props.userrole==="Admin"&&
              <div>
                <hr></hr>
              <Link className="view-inquiries-link" to="/InquiriesAdmin">Process Inquiries</Link>
              <hr></hr>
              <Link className="view-transactions-link" to="/TransactionsAdmin">View Transactions</Link>
              </div>
            }

          </div>
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