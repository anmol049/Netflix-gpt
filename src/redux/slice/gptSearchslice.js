import { createSlice } from "@reduxjs/toolkit";

const gptSearchslice = createSlice({
    name:"search",
    initialState:{
        issearch:false,
        searchedMovieList:null,
        searchedText:null,
    },
    reducers:{
        searchvalue:(state,action)=>{
            state.issearch = !state.issearch
        },
        setSearchedMovieList:(state, action) =>{
            const{searchedResult,searchedText} = action.payload; 
            state.searchedMovieList = searchedResult
            state.searchedText = searchedText
        }
    }
})
export const {searchvalue,setSearchedMovieList} = gptSearchslice.actions;
export default  gptSearchslice.reducer;
