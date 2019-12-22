import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import localization from 'moment/locale/fr';

import Header from './components/Header';
import Footer from './components/Footer';

import '../styles/main.scss';
moment.updateLocale('fr', localization);

const Layout = props => (
  <main>
    <Helmet>
      <title>{props.title} - Blog de Julien Verneaut</title>
      <link
        rel="canonical"
        href={
          typeof window !== 'undefined' &&
          window.location.href.split(/[?#]/)[0].replace(/\/$/, '')
        }
      ></link>
    </Helmet>
    <Header />
    <div className="container">{props.children}</div>
    <Footer />
  </main>
);

export default Layout;
