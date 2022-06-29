import * as React from 'react';
import {Link} from 'react-router-dom';
import '../navbar.css';

export class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleId=this.handleId.bind(this);
        this.handleRole=this.handleRole.bind(this);
    }
    handleLogin(t){
        this.props.handleLogin(t);
    }
    handleId(){
        this.props.handleId("");
    }
    handleRole(){
        this.props.handleRole("");
    }

    render(){
        return(
            <header className="navbar">
                <div className="left-section">
                    <Link to="/" className="left-nav-link">Home</Link>
                    <Link to="/Search" className="left-nav-link">Find A Pet</Link>
                </div>
                <div className = "right-section">

                    {!this.props.loggedin&&//this.props.role==="Admin"&&
                        <Link className="loginbutton" to="/Login">Login</Link>
                    }

                    {this.props.loggedin&&
                        <Link className="loginbutton" onClick={()=>{this.props.handleLogin(false);this.handleId();this.handleRole()}} to="/Login" >Logout</Link>
                    }

                    {this.props.loggedin&&
                        <Link className="right-nav-link" to="/UserProfile">User</Link>
                    }
                </div>
            </header>
        )
    }
}

