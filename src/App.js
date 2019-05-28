import React from 'react';
import styled from 'styled-components';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    items: [],
};

function reducer(state = defaultState, action) {
    console.log("reducer", state, action);

    switch(action.type) {
        case 'ADD NOTE':
            return {
                ...state,
                items: [...state.items, action.item ],
            };
        default: {
            return state;
        }
    }

}

const store = createStore(reducer);

const Application = styled.div`
  width: 100%;
  min-height: 100%;
  padding-top: 30px;
`;

function App() {
  return (
      <Provider store={store}>
        <Application>
          <Form />
          <Notes />
        </Application>
      </Provider>
  );
}

export default App;
