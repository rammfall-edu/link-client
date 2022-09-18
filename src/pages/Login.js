import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../api';
import { ROUTES } from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="content">
      <div className="container">
        <h1>Login</h1>
        <Formik
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .label('Email')
              .email()
              .min(6)
              .max(30)
              .required(),
            password: yup.string().label('Password').min(8).max(30).required(),
          })}
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setFieldError }) => {
            const body = new FormData();

            Object.entries(values).forEach(([key, value]) =>
              body.append(key, value)
            );

            try {
              const { token } = await loginUser(body);
              dispatch(login());
              localStorage.token = token;

              setTimeout(() => {
                navigate(ROUTES.LOGIN);
              }, 3000);
            } catch ({ message, field }) {
              setFieldError(field, message);
            }
          }}
        >
          <Form className="form">
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button buttonType="submit" type="outline">
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Login;
