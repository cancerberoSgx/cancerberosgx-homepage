import * as ReactDOM from 'react-dom';
import App from './main/app'
import { createBrowserHistory, createHashHistory } from 'history';

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

const app = document.createElement('div')
app.setAttribute('id', 'app')
document.body.appendChild(app)
ReactDOM.render(App(), document.querySelector('#app'));

export const history = createHashHistory()
