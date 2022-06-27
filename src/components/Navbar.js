import * as React from 'react';
import {Link} from 'react-router-dom';

import '../navbar.css';

export class Navbar extends React.Component{


    render(){
        return(
            <header class="header">
                <div class="left-section">
                    <Link to="/" class="left-nav-link">Home</Link>
                    <Link to="/Search" class="left-nav-link">Find A Pet</Link>
                </div>
                <div class = "right-section">
                    <Link to="/UserProfile" class="right-nav-link">User</Link>
                </div>
            </header>
        )
    }
}
