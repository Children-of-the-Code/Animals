import * as React from 'react';
import {Link} from 'react-router-dom';


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
            <div className="navbar">   
                <Link className="link" to="/">Home</Link>  
                <Link className="link" to="/Search">Search</Link>
                {this.props.role==="Admin"&&

                <Link key={this.props.userid} className="link" to="/EditAnimal">Edit Animals</Link>
                }
                {!this.props.loggedin&&
                <div>
                    <Link className="loginbutton" to="/Login">Login</Link>
                 <Link className="loginbutton" to="/Registration">Register</Link>        
                </div>
                }
                {this.props.loggedin&&
                <div>
                <Link className="loginbutton" onClick={()=>{this.props.handleLogin(false);this.handleId();this.handleRole()}} to="/Login" >Logout</Link>
                </div>
                }
            </div>
        )
    }
}
