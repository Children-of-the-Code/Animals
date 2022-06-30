import * as React from 'react';
import { TransactionAdminCard } from '../components/TransactionAdminCard';

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