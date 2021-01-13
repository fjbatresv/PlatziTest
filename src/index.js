import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/app';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import templateFn from './template'
const initialState = {
  populars: [],
  genres: [],
  searchTerm: '',
  searchResults: []
};



// ReactDOM.render(
//   <Provider store={store} >
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

export default (req, res) => {
  const html = ReactDOMServer.renderToString(
      <App />
  );
  const template = templateFn(html);
  res.send(template);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();