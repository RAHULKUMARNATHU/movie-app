import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';



const store = createStore(rootReducer);
console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });

// console.log('AFTER STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);


