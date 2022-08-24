import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLink } from '../api';

const Link = () => {
  const { hash } = useParams();

  useEffect(() => {
    getLink(hash).then(({ link }) => {
      location.href = link;
    });
  }, [hash]);
};

export default Link;
