import React from "react";

const listarProjetos = ( {id = 'modal', onClose = () => {}, children }) => { 
    
    const clicarFora = (e)=> {
        if(e.target.id===id) onClose();
    }
    return (
        <div id = {id} className="modal" onClick= {clicarFora}>
         <div className="container">
            <button className="close-Btn" onClick= {onClose}>Fechar</button>
            <div className="content">{children}</div>
         </div>
        </div>
    );
};

export default listarProjetos;