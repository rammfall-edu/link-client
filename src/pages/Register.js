import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Input from '../components/Input';
import Button from '../components/Button';
import { registerUser } from '../api';
import { ROUTES } from '../constants';

const Register = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  return (
    <section className="content">
      <div className="container">
        <h1>Register</h1>
        {message && <p className="message">{message}</p>}
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
            confirmPassword: yup
              .string()
              .label('Password')
              .min(8)
              .max(30)
              .oneOf([yup.ref('password'), null], 'Passwords must match')
              .required(),
          })}
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setFieldError }) => {
            const body = new FormData();

            Object.entries(values).forEach(([key, value]) =>
              body.append(key, value)
            );

            try {
              const { info } = await registerUser(body);

              setMessage(info);
              setTimeout(() => {
                setMessage('');
                navigate(ROUTES.LOGIN);
              }, 3000);
            } catch ({ message, field }) {
              setFieldError(field, message);
            }
          }}
        >
          <Form className="form">
            <Field name="email" component={Input} label="Email" />
            <Field
              name="password"
              component={Input}
              label="Password"
              type="password"
            />
            <Field
              name="confirmPassword"
              component={Input}
              label="Confirm password"
              type="password"
            />
            <Button buttonType="submit">Register</Button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Register;
