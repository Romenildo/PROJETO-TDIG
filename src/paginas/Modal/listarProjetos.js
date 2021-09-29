import React from "react";


const listarProjetos = ( {id = 'modal', onClose = () => {}, children }) => { 
    
    const clicarFora = (e)=> {
        if(e.target.id===id) onClose();
    }

    const carregarProjetos = async ()=>{
        const response = await fetch("https://fast-badlands-00990.herokuapp.com/api/v1/projects")
        const dados = await response.json()
        console.log(dados)
    }
    window.onload=()=>{
        carregarProjetos()
        console.log("iniciado")
    }
    return (
        <div id = {id} className="modal" onClick= {clicarFora}>
         <div className="container">
            <button className="close-Btn" onClick= {onClose}>Fechar</button>
            <div className="content">{children})</div>
         </div>
        </div>
    );
};

export default listarProjetos;