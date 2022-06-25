import * as React from 'react';
import {Link} from 'react-router-dom';
import '../navbar.css';

export class Navbar extends React.Component{


    render(){
        return(
            <div className="navbar">
                
                <Link className="link" to="/Search">Search</Link>
                <Link className="link" to="/">Home</Link>
                <Link className="loginbutton" to="/Login">Login</Link>
            </div>
        )
    }
}
