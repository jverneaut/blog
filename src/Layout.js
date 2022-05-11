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
      <meta name="twitter:card" content="summary" />
      <meta
        property="og:url"
        content={`https://blog.julienverneaut.com/${props.slug}`}
      />
      <meta property="og:title" content={props.title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:image"
        content={'https://blog.julienverneaut.com/' + props.slug + '.jpg'}
      />
      <meta
        property="og:image:url"
        content={'https://blog.julienverneaut.com/' + props.slug + '.jpg'}
      />
      <meta
        property="og:image:secure_url"
        content={'https://blog.julienverneaut.com/' + props.slug + '.jpg'}
      />

      <title>{props.title} - Blog de Julien Verneaut</title>
      <link
        rel="canonical"
        href={
          typeof window !== 'undefined' &&
          window.location.href.split(/[?#]/)[0].replace(/\/$/, '')
        }
      ></link>
      <script defer data-domain="blog.julienverneaut.com" src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
    <Header />
    <div className="container">{props.children}</div>
    <Footer />
  </main>
);

export default Layout;
