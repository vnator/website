import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { RawIntlProvider, createIntl } from 'react-intl';

import { messages } from './messages';
import { Main } from './components/Main/Main';
import * as serviceWorker from './config/serviceWorker';
import './theme/index.css';
import { parseMessages } from './config/parseMessages';
import { LANG } from './constants/lang';

if (!Intl.PluralRules) {
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/dist/locale-data/pt');
  require('@formatjs/intl-pluralrules/dist/locale-data/en');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/pt');
  require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
}

if (!Intl.DisplayNames) {
  require('@formatjs/intl-displaynames/polyfill');
  require('@formatjs/intl-displaynames/dist/locale-data/pt'); // Add locale data for de
  require('@formatjs/intl-displaynames/dist/locale-data/en'); // Add locale data for de
}

const browserLocale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]);

const locale = Object.values(LANG).includes(browserLocale)
  ? browserLocale
  : LANG.EN;

const intl = createIntl({
  locale,
  messages: parseMessages(messages[locale]),
});

ReactDOM.render(
  <RawIntlProvider value={intl}>
    <Router>
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    </Router>
  </RawIntlProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
