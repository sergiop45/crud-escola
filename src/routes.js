import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Alunos from './pages/Alunos';
import Home from './pages/Home';

function Rotas() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home/>}/>

                <Route exact path='/alunos' element={<Alunos/>}/>
                <Route exact path='/professores' element={<Professores/>}/>
                <Route exact path='/escola' element={<Escola/>}/>
                
            </Routes>
        </Router>
    );
}





function Professores() {
    return(
        <h2>Professores</h2>
    )
}

function Escola() {
    return(
        <h2>Escola</h2>
    )
}

export default Rotas;