import React  from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import './Modal/modal.css'



const Register = () => {
    const history = useHistory();

    const handleSubmit = async (values) => {
        const init = {
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }  
        const response = await fetch("https://fast-badlands-00990.herokuapp.com/api/v1/signup", init)  
        //fazer verificacao se é aluno ou professor
        if(response.ok){
            alert("Cadastrado com Sucesso")
            history.push('/');
        }
    }

    const validations = Yup.object().shape({
        username: Yup.string().required('*Required!'),
        password: Yup.string().required('*Required!').min(4, 'Too short!').max(10, 'Too long!'),
        function: Yup.string().required('*Required!'),
        role: Yup.string().required('*Required!')
    })

  return (
    <>
        
        <h1 className="centraliza">Registrar</h1>
        <p>Prencha os campos abaixo.</p>
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
        >
            <Form className="Login">
                <div className="Login-Group">
                    username:
                    <Field
                        name="username"
                        className="Login-Field"
                        placeholder="Digite seu nome"
                    />
                    <ErrorMessage
                        component="span"
                        name="username"
                        className="Login-Error"
                    />
                </div>
                <div className="Login-Group">
                    password:
                    <Field
                        name="password"
                        className="Login-Field"
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <ErrorMessage
                        component="span"
                        name="password"
                        className="Login-Error"
                    />
                </div>
                <div id="minhaDiv">
                    <div className="Login-Group">
                        function:
                        <Field
                        
                            placeholder="digite"
                            name="function"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="function"
                            className="Login-Error"
                        />
                    </div>
                    
                    <div className="Login-Group">
                        Role:
                        <Field
                            name="role"
                            className="Login-Field"
                        
                            placeholder="Digite "
                        />
                        <ErrorMessage
                            component="span"
                            name="role"
                            className="Login-Error"
                        />
                    </div>
                </div>
                <div className="Container-Btn">
                    <a href="/" className="Login-Btn">Login</a>
                    <button className="Login-Btn" type="submit">Registrar</button>
                </div>

            </Form>
        </Formik>
    </>
)
};

export default Register;