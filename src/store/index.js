import {configureStore, createSlice} from "@reduxjs/toolkit"


const counterslice = createSlice({
    name:"Counter",
    initialState: {counter:0, showcounter:true},
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        toggle(state){
            state.showcounter = !state.showcounter
        }    
    }
})

const authSlice = createSlice({
    name: "Authentication",
    initialState:{isAuthenticated: false},
    reducers:{
        loggedin(state){
            state.isAuthenticated = true
        },
        loggedout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({reducer:{counter:counterslice.reducer,authentication:authSlice.reducer}})


export const authSliceAcitons = authSlice.actions
export const counterSliceActions = counterslice.actions 
export default store


