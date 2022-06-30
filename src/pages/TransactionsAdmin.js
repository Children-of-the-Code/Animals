import * as React from 'react';
import { TransactionAdminCard } from '../components/TransactionAdminCard';
import {Link} from 'react-router-dom';

export class TransactionsAdmin extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allTransactions:[]
      }
    }

    componentDidMount(){
      this.addTransactions()
    }

    componentDidUpdate(){
      this.addTransactions()
    }

    addTransactions(){ // Gets all transactions
      let temparray=[];
      
      if (this.props.userid){
        fetch("https://animalrescueproject.azurewebsites.net/donations")
        .then(response=>response.json())
        .then(transaction => {
          transaction.map(transactions => {temparray.push(transactions)});
          this.setState({
            allTransactions:temparray
          }, console.log(this.state.allTransactions))
        })
      }
    }

    render(){
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
            <h3>Transactions</h3>
            <div className="results-list">
            {this.state.allTransactions.map(transaction => (
                  <TransactionAdminCard key={transaction.donation_id} transactionId={transaction.donation_id} username={transaction.user.username} date={transaction.date_added} amount={transaction.amount}/>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}