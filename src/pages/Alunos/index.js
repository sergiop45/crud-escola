import React, {Component} from 'react'
import './aluno.css'

class Alunos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            alunos: []
        }

        this.loadFilmes = this.loadAlunos.bind(this);
        this.deletar = this.deletar.bind(this);
    }

    componentDidMount() {
        this.loadAlunos();
    }

    loadAlunos() {

        fetch("http://localhost:3000/api/alunos")
        .then((data) => data.json())
            .then((list) => {
            this.setState({alunos: list});
            console.log("filmes carregados")
        });
    }

    deletar(idAluno) {
        alert("clicou no "+idAluno)
        fetch("http://localhost:3000/api/alunos/"+idAluno,{
            method: "DELETE"
        }).then(() => {
            alert("Filme Deletado!")
            this.loadAlunos()
        }).catch((err) => alert("Erro ao tentar deletar"));
    }


    render() {
        return(
            
            <div>
                <h2>Alunos</h2>
                    {this.state.alunos.map((aluno) => {
                        let bolsa = "";
                        if(aluno.bolsista) {
                            bolsa = "Sim";
                        } else {
                            bolsa= "Não";
                        }
                        return(
                            <div className='container-aluno' key={aluno._id}>
                            <article  className="aluno">
                                <strong>Nome:{aluno.nome}</strong>
                                <p>Matricula:{aluno.matricula}</p>
                                <p>Bolsista: {bolsa}</p>  
                                
                            </article>
                            <div className='btns'>
                                <button className='btndelete' onClick={() => this.deletar(aluno._id)}>
                                    Deletar 
                                </button>
                                <button className='btnedit'>
                                    Editar 
                                </button>
                            </div>
                            </div>

                            
                        )
                        
                    })}

                </div>
        );
    }
    
}

export default Alunos;