import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux"

const Counter = () => {
  const toggleCounterHandler = () => {};

  const dispatch = useDispatch()
  const countervalue = useSelector((state)=>state.counter)

  const incrementhandler = () =>{
    dispatch({type: "INCREMENT"})
  }
  const decrementhandler = () =>{
    dispatch({type: "DECREMENT"})
  }
  const incrementby5handler = () =>{
    dispatch({type: "INCREMENTBY5"})
  }
  const decrementby5handler = () =>{
    dispatch({type: "DECREMENTBY5"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{countervalue}</div>
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={decrementhandler}>Decrement</button>
        <button onClick={incrementby5handler}>Increment By 5</button>
        <button onClick={decrementby5handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
