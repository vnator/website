import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/include-aliases'; // Optional, if you care about edge cases in locale resolution, e.g zh-CN -> zh-Hans-CN
import '@formatjs/intl-relativetimeformat/dist/locale-data/pt';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import { messages } from './messages';
import { flattenMessages } from './config/flattenMessages';

import * as serviceWorker from './config/serviceWorker';
import { Main } from './components/Main/Main';

import './theme/index.css';

const locale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]) ||
  'pt-BR';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Router>
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </Router>
  </IntlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
