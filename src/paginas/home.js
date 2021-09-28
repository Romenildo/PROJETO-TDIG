import React, {useState}from 'react'
import axios from 'axios'


import ModalListar from './Modal/listarProjetos'
import CadastrarProjetos from './Modal/cadastrarProjetos'

const Home = () => {

    const dados = {
        description: "Cadastro de projetos (Um projeto precisa ter, no mínimo: nome e descrição)  somente a partir de um usuário professor Vinculação de alunos somente por um professor (terão diferentes papéis, por exemplo: estágio, júnior, pleno, sênior, master, etc.)",
        name: "Projeto TDIG",
        users: [{
            function:"TRAINEE",
            id:"0",
            registration: 0,
            role: "ALUMN",
            username: "Usuario"
        }
        ]
    }

    const [isModalVisibleListar, setIsModalVisibleListar] = useState(false)
    const [isModalVisibleCadastro, setIsModalVisibleCadastro] = useState(false)
    

    return(
        <>
        <div className="header">
            Bem Vindo: {dados.users[0].username}
        </div>
        <div className="info">
            <h1>Informacoes </h1>
            <p>nome: {dados.users[0].username}</p> 
        </div>
        <div className="Principal">
            <h1>Projetos</h1>

            <div className="Modal">
            <button className="Btn" onClick = {() => setIsModalVisibleCadastro(true)}>Cadastrar</button>
            {isModalVisibleCadastro ? <CadastrarProjetos onClose = {() => setIsModalVisibleCadastro()}>
                
                <h2>Cadastrar Projetos</h2>

                
                </CadastrarProjetos> : null}
            </div>


            <br/>



            <div className="Modal">
                <button className="Btn" onClick = {() => setIsModalVisibleListar(true)}>Listar</button>
                {isModalVisibleListar ? <ModalListar onClose = {() => setIsModalVisibleListar()}>
                    
                    <h2 className="descricao" >listar Projetos</h2>
                    <p>{dados.name}</p>
                    <p className = "">{dados.description}</p>
                    <p className="descricao">alunos: {dados.users[0].username}</p>
                    
                    </ModalListar> : null}
            </div>

        </div>

        </>
    )
}

export default Home