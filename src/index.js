import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const initialState = 0;

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return state + 1;

		case 'subtract':
			return state - 1;

		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
    <>
      {state}
      <button onClick={() => dispatch({ type: 'add'})}> + </button>
      <button onClick={() => dispatch({ type: 'subtract'})}> - </button>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
