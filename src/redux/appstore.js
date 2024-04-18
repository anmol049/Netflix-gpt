import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import userslice from './slice/userslice'
import movieslice from "./slice/movieslice"
import gptSearchslice from "./slice/gptSearchslice"
import configSlice from "./slice/configSlice"

const appstore = configureStore({
    reducer:{
        userinfo : userslice,
        movie : movieslice,
        search : gptSearchslice,
        configration:  configSlice
    },
})
export default appstore