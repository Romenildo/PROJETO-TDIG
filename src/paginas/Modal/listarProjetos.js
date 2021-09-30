import React from "react";


const listarProjetos = ( {id = 'modal', onClose = () => {}, children }) => { 
    
    const clicarFora = (e)=> {
        if(e.target.id===id) onClose();
    }

    const carregarProjetos =()=>{
        fetch("https://fast-badlands-00990.herokuapp.com/api/v1/projects")
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
            })

    }
    return (
        <div id = {id} className="modal" onClick= {clicarFora}>
         <div className="container">
             {/* aqui devia ser pra fechar mas coloquei carregar projetos para testar a api */}
            <button className="close-Btn" onClick= {carregarProjetos()}>Fechar</button>
            <div className="content">{children})</div>
         </div>
        </div>
    );
};

export default listarProjetos;