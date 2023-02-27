import { configureStore, createSlice }  from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
            console.log(action);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
})

const moviesSplice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        reset(state, action) {
            return [];
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSplice.reducer
    }
})

// console.log(JSON.stringify(store.getState()));
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New song'
// });
// console.log(store.getState());

export {store};
export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie} = moviesSplice.actions;
