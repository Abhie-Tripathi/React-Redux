import {createStore} from "redux"

const storereducer = (state,actions) =>{
    if(actions.type === "INCREMENT"){
        return {counter: state.counter + 1}
    }
    if(actions.type === "DECREMENT"){
        return {counter: state.counter - 1}
    }
    if(actions.type === "INCREMENTBY5"){
        return {counter: state.counter + 5}
    }
    if(actions.type === "DECREMENTBY5"){
        return {counter: state.counter - 5}
    }
    return {counter:0}
}

const store = createStore(storereducer)



export default store


