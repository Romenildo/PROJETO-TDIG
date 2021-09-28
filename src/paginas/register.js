import React  from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import './Modal/modal.css'



const Register = () => {
    const handleSubmit = values => {
        console.log(values)
        axios.post("https://fast-badlands-00990.herokuapp.com/api/v1/signup", values)
        .then(resp => {
            const  data  = resp
            console.log(resp)
            resp.data = values
            console.log(resp)
            if (resp) {
                alert("Registrado com sucesso")
                return <Link to='/'/>;
            }
        })
        
    }

    const validations = Yup.object().shape({
        username: Yup.string().required('*Required!'),
        password: Yup.string().required('*Required!').min(4, 'Too short!').max(10, 'Too long!'),
        function: Yup.string().required('*Required!'),
        role: Yup.string().required('*Required!'),
        registration: Yup.number().required('*Required!')
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
                    <div className="Login-Group">
                        registration:
                        <Field
                            name="registration"
                            className="Login-Field"
                        
                            placeholder="Digite "
                        />
                        <ErrorMessage
                            component="span"
                            name="registration"
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