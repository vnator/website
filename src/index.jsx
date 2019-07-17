import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';

import { messages } from './messages';
import { flattenMessages } from './config/flattenMessages';

import * as serviceWorker from './config/serviceWorker';
import { Main } from './components/Main/Main';

addLocaleData([...pt, ...en]);

const locale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]) ||
  'pt-BR';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Router>
      <Main />
    </Router>
  </IntlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
