import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        movie: null,
        trailor:null,
        popular:null,
        upcoming:null,
        toprated:null,
        trending:null,
        topTvSeries:null,
        popularTvSeries:null,
        video:null,
        ID:null,
    },
    reducers:{
        add:(state,action) =>{
            state.movie=action.payload;
        },
        addtrailor: (state, action)=> {
            state.trailor = action.payload
        },
        addpopular:(state,action) =>{
            state.popular =action.payload;
        },
        addupcoming:(state,action) =>{
            state.upcoming=action.payload;
        },
        addtoprated:(state,action) =>{
            state.toprated=action.payload;
        },
        addtrending:(state,action) =>{
            state.trending=action.payload;
        },
        addTopTvSeries:(state,action) =>{
            state.topTvSeries = action.payload;
        },
        addPopularTvSeries:(state,action)=>{
            state.popularTvSeries = action.payload
        },
        addvideo:(state,action)=>{
            state.video = action.payload
        },
        addTrailorID:(state,action)=>{
            state.ID = action.payload
        },
    }
})
export const {add,addtrailor,addpopular,addtoprated,addupcoming,addtrending,addTopTvSeries,addPopularTvSeries,addvideo,addTrailorID}=movieslice.actions;
export default  movieslice.reducer;