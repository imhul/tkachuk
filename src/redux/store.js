import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducers"

const isDev = import.meta.env.DEV

const store = configureStore({
    reducer,
    devTools: isDev,
    preloadedState: {}
})

export default store
