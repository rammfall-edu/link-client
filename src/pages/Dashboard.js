import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Input from '../components/Input';
import Button from '../components/Button';
import { createLink, getLinks } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { linksSelector } from '../store/links/selectors';
import {
  createLink as createLinkAction,
  getLinks as getLinksAction,
} from '../store/links/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const links = useSelector(linksSelector);

  useEffect(() => {
    getLinks().then((links) => {
      dispatch(getLinksAction({ links }));
    });
  }, [dispatch]);

  const formatLink = (hash) => `${location.origin}/l/${hash}`;

  return (
    <section className="content">
      <div className="container">
        <h1>Links</h1>
        <Formik
          validationSchema={yup.object().shape({
            link: yup.string().label('Link').url().min(10).required(),
          })}
          initialValues={{ link: '' }}
          onSubmit={async (values, { resetForm }) => {
            const body = new FormData();

            Object.entries(values).forEach(([key, value]) =>
              body.append(key, value)
            );

            try {
              const link = await createLink(body);

              dispatch(createLinkAction({ link }));
              resetForm();
            } catch (err) {}
          }}
        >
          <Form className="form">
            <Input name="link" label="Link" />
            <Button buttonType="submit">Create</Button>
          </Form>
        </Formik>

        <ul className="links">
          {links.map(({ id, link, hash }) => {
            const formattedHash = formatLink(hash);
            return (
              <li key={id} className="link">
                <div
                  className="link__hash"
                  onClick={() => {
                    const type = 'text/plain';
                    const blob = new Blob([formattedHash], { type });
                    const data = [new ClipboardItem({ [type]: blob })];

                    navigator.clipboard.write(data).then(
                      () => {
                        /* success */
                      },
                      () => {
                        /* failure */
                      }
                    );
                  }}
                >
                  Link
                </div>
                <div className="link__link">{link}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
