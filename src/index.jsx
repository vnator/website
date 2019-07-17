import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './config/serviceWorker';
import { Main } from './components/Main/Main';

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
