import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import netflixReducer from './movieAPI/slice'



export const store = configureStore({
    reducer:{
        netflix: netflixReducer,
}
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

                 

                   
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDipatch: () => AppDispatch = useDispatch;