import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>Something about me.</p>
    <Link to="/">&larr; back home</Link>
  </Layout>
);
