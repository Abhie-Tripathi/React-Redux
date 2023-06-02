import {createStore} from "redux"

const storereducer = (state,actions) =>{
    if(actions.type === "INCREMENT"){
        return {counter: state.counter + 1}
    }
    if(actions.type === "DECREMENT"){
        return {counter: state.couter - 1}
    }
    if(actions.type === "INCREMENTBY2"){
        return {counter: state.couter + 2}
    }
    if(actions.type === "DECREMENTBY2"){
        return {counter: state.couter - 2}
    }
    return {counter:0}
}

const store = createStore(storereducer)



export default store


