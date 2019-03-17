import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import fillComments from './reducers/index'

import './index.css'

(function checkLocStor() {
	if (localStorage.getItem('comments') == null){
		let defArr = [];
		let defArrJson = JSON.stringify(defArr);
		localStorage.setItem('comments', defArrJson);
	}
})();

const initialState = JSON.parse(localStorage.getItem('comments'));
const store = createStore(fillComments, initialState);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )