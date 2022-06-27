import * as React from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends React.Component{


    render(){
        return(
            <div>
                <Link to="/Search">Search</Link>
                <Link to="/AddAnimal">Add Animal</Link>
                <Link to="/">Home</Link>
            </div>
        )
    }
}
