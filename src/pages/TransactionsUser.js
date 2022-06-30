import * as React from 'react';

import { TransactionCard } from '../components/TransactionCard';

export class TransactionsUser extends React.Component{
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

    addTransactions(){

      let temparray=[];

      if (this.props.userid){
        fetch("https://animalrescueproject.azurewebsites.net/donations/user/"+this.props.userid)
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
                  <TransactionCard key={transaction.donation_id} date={transaction.date_added} amount={transaction.amount}/>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}

