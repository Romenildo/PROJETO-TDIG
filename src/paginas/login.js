import React  from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

import './Formulario.css'

const Login = () => {
    const handleSubmit = values => {

        const dados = {
            password: values.password,
            username: values.username
        }
        alert(JSON.stringify(dados))

        const init = {
            
            method: 'POST',
            headers: {
                "content-Type": 'application/json'
            },
            body: JSON.stringify(dados)
        }
        fetch("https://fast-badlands-00990.herokuapp.com/api/v1/login", init)
        .then(response => response.json())
        .then(data=> console.log(data.password))
        
    }

    const validations = Yup.object().shape({
    password: Yup.string().required('*Required!').min(4, 'Too short!').max(10, 'Too long!'),
    username: Yup.string().required('*Required!')
    })

    return (
        <>
            <h1 className="centraliza">Login</h1>
            <p>Preencha os dados abaixo</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        Username:
                        <Field
                            name="username"
                            className="Login-Field"
                            placeholder="Digite seu username"
                        />
                        <ErrorMessage
                            component="span"
                            name="username"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                        Password:
                        <Field
                            name="password"
                            type="password"
                            className="Login-Field"
                            placeholder="Digite sua senha"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Container-Btn">
                        <a href="/register" className="Login-Btn" >Registrar</a>
                        <button className="Login-Btn" type="submit">Login</button>
                    </div>
                    <br/>
                    <div className="Login-Error">*Caso não tenha uma conta Registre-se</div>
                </Form>
            </Formik>
        </>
    )
}

export default Login;