import React from "react";
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

const CadastrarProjetos = ( {id = 'modal', onClose = () => {}, children }) => { 
    
    const clicarFora = (e)=> {
        if(e.target.id === id) onClose();
    }

    const handleSubmit = values => {
        alert(values)
    }

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