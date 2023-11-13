import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_KEY, TMDB_BASE_URL } from '../../constants';
import axios from 'axios';


const initialState = {
    movies: [],
    categories: [],
    loaded: false
};


export const getCategory = createAsyncThunk("netfilx/categories", async () => {
    const { data } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const { genres } = data;

    return genres;
});


export const getMovies = createAsyncThunk("netfilx/movies", async () => {
    let moviesArray: any[] = [];

    for (let i = 1; i <= 3; i++) {

        const { data } = await axios.get(`${TMDB_BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${i}`);

        const movies = data.results;
        moviesArray = moviesArray.concat(movies);

    }
    return moviesArray;
});


export const netflixSlice = createSlice({
    name: 'netflix',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loaded = true;
            })
            .addCase(getMovies.fulfilled, (state, action: any) => {
                state.movies = action.payload;
            });
    }
});

export default netflixSlice.reducer;
export const { } = netflixSlice.actions;
