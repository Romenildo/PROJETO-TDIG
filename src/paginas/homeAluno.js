import React, {useState}from 'react'



import ModalListar from './Modal/listarProjetos'

const HomeAluno = () => {

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

export default HomeAluno