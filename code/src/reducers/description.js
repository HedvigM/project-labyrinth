import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    currentPosition: null,
    labyrinthDescription: null,
    loading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setDescription: (store, action) => {
      store.labyrinthDescription = action.payload;
    },

    setLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

export const fetchStart = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((json) => dispatch(labyrinth.actions.setDescription(json)))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)));
  };
};

export const fetchContinue = (username, type, direction) => {
  return (dispatch) => {
    // dispatch borde vara här
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Owl' })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setDescription(json));
        dispatch(labyrinth.actions.setDesciptionHistory({ direction }));
      });
  };
};
