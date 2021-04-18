import { createSlice } from '@reduxjs/toolkit';

//Data
import moodsData from './data/moodsData';
import genresData from './data/genresData';
import artistsData from './data/artistData';
import keysData from './data/keysData';
import trackTypeData from './data/trackTypeData';

const initialState = {
    moods: moodsData,
    genres: genresData,
    artists: artistsData,
    keys: keysData,
    trackTypes: trackTypeData,
}

const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {},
})

export default optionsSlice.reducer;