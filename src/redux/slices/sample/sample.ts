import { createSlice } from '@reduxjs/toolkit';

// Utils
import removeTagFromArray from '../../../utils/removeTagFromArray';

// Types
import type { sampleState } from './types';

const initialState: sampleState = {
    moods: [],
    artists: [],
    bpm: 0,
    key: null,
    trackType: null,
    genres: [],
    genresSubgenresCombinations: [],
};

const sampleSlice = createSlice({
    name: 'sample',
    initialState,
    reducers: {
        addMood: (state, action) => {
            return { ...state, moods: action.payload };
        },
        removeMood: (state, action) => {
            const moods = removeTagFromArray(state.moods, action.payload);
            return { ...state, moods };
        },
        addArtist: (state, action) => {
            return { ...state, artists: action.payload };
        },
        removeArtist: (state, action) => {
            const artists = removeTagFromArray(state.artists, action.payload);
            return { ...state, artists };
        },
        setBpm: (state, action) => {
            let bpm = action.payload;

            if(bpm > 999 || bpm < 0 || isNaN(bpm)) bpm = 0;

            bpm = bpm ? parseInt(bpm, 10) : ''
            
            return { ...state, bpm};
        },
        setKey: (state, action) => {
            return { ...state, key: action.payload };
        },
        setTrackType: (state, action) => {
            return { ...state, trackType: action.payload };
        },
        addGenre: (state, action) => {
            let genres = action.payload;
            return { ...state, genres };
        },
        removeGenre: (state, action) => {
            const genres = removeTagFromArray(state.genres, action.payload);
            return { ...state, genres };
        },
        addGenresSubgenresCombination: (state, action) => {
            const genresSubgenresCombinations = action.payload;
            return { ...state, genresSubgenresCombinations };
        },
        removeGenresSubgenresCombination: (state, action) => {
            const combinationToDelete = action.payload;
            const genresSubgenresCombinations = state.genresSubgenresCombinations.filter((item) => item.genre + item.subgenre.value !== combinationToDelete.genre + combinationToDelete.subgenre.value);
            return { ...state, genresSubgenresCombinations };
        },
        populateSubgenres: (state, action) => {
            let genres = state.genres;
            const combinations = state.genresSubgenresCombinations;

            genres = genres.map((item: any) => {
                if(item.subgenres) {
                    return {
                        label: item.label,
                        value: item.value,
                        subgenres: [],
                    }
                }

                return item;
            })

            combinations.forEach((combination) => {
                genres.forEach((genre) => {
                    if(genre.label === combination.genre && genre.subgenres) {
                        genre.subgenres.push(combination.subgenre);
                    }
                })
            })

            return { ...state, genres };
        },
    },
})

export const { 
    addMood,
    removeMood,
    addArtist,
    removeArtist,
    setBpm,
    setKey,
    setTrackType,
    addGenre,
    removeGenre,
    addGenresSubgenresCombination,
    removeGenresSubgenresCombination,
    populateSubgenres,
} = sampleSlice.actions;
export default sampleSlice.reducer;