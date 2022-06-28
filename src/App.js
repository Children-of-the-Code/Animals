import React from 'react';
import ReactDOM from 'react-dom/client';
import{Navbar} from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import {Home} from './pages/Home';
import {Search} from './pages/Search';
import { LoginUser } from './pages/LoginUser';
import {AddAnimal} from './pages/AddAnimal';
import {RegistrationUser} from './pages/RegistrationUser';
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
          {this.state.userrole==="Admin"&&
          <Route path="/AddAnimal" element={<AddAnimal loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
          }
          <Route path="/Login" element={<LoginUser key={this.state.userid} loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.userrole} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
          <Route path="/Registration" element={<RegistrationUser/>}/>

        </Routes>
        </div>
      </div>
    </HashRouter>
    </div>
  );
  }
}

export default App;