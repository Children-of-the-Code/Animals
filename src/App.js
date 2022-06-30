import React from 'react';
import{Navbar} from './components/Navbar';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import {Home} from './pages/Home';
import {Search} from './pages/Search';
import { LoginUser } from './pages/LoginUser';
import { UserProfile } from './pages/ProfileUser';
import { InquiriesUser } from './pages/InquiriesUser';
import { InquiriesAdmin } from './pages/InquiriesAdmin';
import { TransactionsUser } from './pages/TransactionsUser';
import { TransactionsAdmin } from './pages/TransactionsAdmin';
import { DonationForm } from './components/DonationForm';


import {RegistrationUser} from './pages/RegistrationUser';

import {EditAnimal} from './pages/EditAnimal';


class App extends React.Component {
  constructor(props){
    super(props);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleId=this.handleId.bind(this);
    this.handleRole=this.handleRole.bind(this);
    this.state={
      loggedin:false,
      userid:"",
      userrole:""
    }
  }
  handleLogin(loggedins){

    this.setState({loggedin:loggedins},console.log());
 
  }
  handleId(id){
    this.setState({userid:id},console.log());
  
  }
  handleRole(role){
    this.setState({userrole:role},console.log());
  }
  
  render(){
  return (
    <div>
      <HashRouter>
      <div>
        <div>
        <Navbar key={this.state.userid} loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}></Navbar>
        </div>
        <div>
        <Routes>
        <Route path="/" element={<Home loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole}/>}/>
          <Route path="/Search" element={<Search loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole}/>}/>

          <Route path="/Login" element={<LoginUser key={this.state.userid} loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
          <Route path="/Registration" element={<RegistrationUser/>}/>
          {this.state.userrole==="Admin"&&
          
           
          <Route path="/EditAnimal" element={<EditAnimal loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
          }
          {this.state.userrole==="Admin"&&
          <Route path="/Login" element={<LoginUser key={this.state.userid} loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
          }
          {this.state.loggedin&&
            <Route path="/UserProfile" element={<UserProfile loggedin={this.state.loggedin} userid={this.state.userid} userrole={this.state.userrole}/>}/>
          }
          {this.state.loggedin&&
            <Route path="/InquiriesUser" element={<InquiriesUser loggedin={this.state.loggedin} userid={this.state.userid} userrole={this.state.userrole}/>}/>
          }
          {this.state.loggedin&&
            <Route path="/InquiriesAdmin" element={<InquiriesAdmin loggedin={this.state.loggedin} userid={this.state.userid} userrole={this.state.userrole}/>}/>
          }
          {this.state.loggedin&&
            <Route path="/TransactionsUser" element={<TransactionsUser loggedin={this.state.loggedin} userid={this.state.userid} userrole={this.state.userrole}/>}/>
          }
          {this.state.loggedin&&
            <Route path="/TransactionsAdmin" element={<TransactionsAdmin loggedin={this.state.loggedin} userid={this.state.userid} userrole={this.state.userrole}/>}/>
          }

        </Routes>
        </div>
      </div>
    </HashRouter>
    <div className='center'>
        <DonationForm loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.role} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}></DonationForm>
      </div>
    </div>
  );
  }
}

export default App;