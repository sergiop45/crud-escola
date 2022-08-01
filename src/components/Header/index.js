import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './style.css'

class Header extends Component {

    

    


    render() {
        return(
            <div className='header'>
                <Link to="/">MegaFilmes</Link>
                <Navbar />
                
            </div>
        );
    }
}

export default Header;