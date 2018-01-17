import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import configureStore from './configureStore';
import './index.css';

// require('moment/locale/lt');
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import 'react-tippy/dist/tippy.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-redux-toastr/lib/css/rezact-redux-toastr.min.css';

const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);
