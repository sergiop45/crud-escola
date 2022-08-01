import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className='navbar'>
           <Link to="/alunos" >Alunos</Link>
           <Link to="/professores" >Professores</Link>
           <Link to="/escola">Escola</Link> 
        </div>
    );
}

export default Navbar;