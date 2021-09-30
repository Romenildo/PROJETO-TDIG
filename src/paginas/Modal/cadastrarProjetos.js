import React from "react";
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

const CadastrarProjetos =  ( {id = 'modal', onClose = () => {}, children }) => { 
    
    const history = useHistory();

    //fechar Modal
    const clicarFora = (e)=> {
        if(e.target.id === id) onClose();
    }


    //Envio do Formulario Projetos
    const handleSubmit = async values => {
        const dados = {
            description:values.description,
            name: values.name,
            users:[{
                function:"TRAINEE",
                id:1,
                registration: 0,
                role: "ALUMN",
                username:"usuario"
            }]
        }
        
        alert(JSON.stringify(dados))
        const init = {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "content-Type": 'application/json'
            },
            credentials: 'same-origin',
            authenticated: "true" ,
            body: JSON.stringify(dados)
        }  
        const response = await fetch("https://fast-badlands-00990.herokuapp.com/api/v1/projects", init)  
        if(response.ok){
            alert("Cadastrado com Sucesso")
            history.push('/homeProfessor');
        }
    }

    //Validação do formulario Projetos
    const validations = Yup.object().shape({
        name: Yup.string().required('*Required!'),
        description: Yup.string().required('*Required!')
    })

    

    return (
        <div id = {id} className="modal" onClick= {clicarFora}>
         <div className="container">
            <button className="close-Btn" onClick= {onClose}>Fechar</button>
            <div className="content">

                <h1 className="">Registrar Projeto</h1>
                
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="LoginProjeto">
                        <div className="Login-Group">
                            Name:
                            <Field
                                name="name"
                                className="Login-FieldName"
                                placeholder="Digite nome do projeto"
                            />
                            <ErrorMessage
                                component="span"
                                name="name"
                                className="Login-Error"
                            />
                        </div>
                        <div className="Login-Group">
                            <br/>
                        description:
                        <br/>
                            <Field
                                name="description"
                                className="Login-FieldDescription"
                                placeholder="Digite a Descrição do projeto..."
                            />
                            <ErrorMessage
                                component="span"
                                name="description"
                                className="Login-Error"
                            />
                        </div>
                        <div className="Container-Btn">
                            <button className="Login-Btn" type="submit">Pronto</button>
                        </div>
                        <br/>
                    </Form>
                </Formik>
                
            </div>
         </div>
        </div>
    );
};

export default CadastrarProjetos;