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
    this.setState({loggedin:loggedins},);
 
  }
  handleId(id){
    this.setState({userid:id});
  
  }
  handleRole(role){
    this.setState({userrole:role});
  }
  componentDidUpdate(){
    console.log(this.state.loggedin);
    console.log(this.state.userid);
    console.log(this.state.userrole);
  }

  
  render(){
  return (
    <div>
      <HashRouter>
      <div>
        <div>
        <Navbar loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.role} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}></Navbar>
        </div>
        <div>
        <Routes>
        <Route path="/" element={<Home loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.role}/>}/>
          <Route path="/Search" element={<Search loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.role}/>}/>
          <Route path="/Login" element={<LoginUser loggedin={this.state.loggedin} userid={this.state.userid} role={this.state.role} handleLogin={this.handleLogin} handleId={this.handleId} handleRole={this.handleRole}/>}/>
        </Routes>
        </div>
      </div>
    </HashRouter>
    </div>
  );
  }
}

export default App;
