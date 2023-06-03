import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux"
import { counterSliceActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch()
  const countervalue = useSelector((state)=>state.counter.counter)
  const showcounter = useSelector((state)=>state.counter.showcounter)

  const incrementhandler = () =>{
    dispatch(counterSliceActions.increment())
  }
  const decrementhandler = () =>{
    dispatch(counterSliceActions.decrement())
  }
 
  const toggleCounterHandler = () =>{
    dispatch(counterSliceActions.toggle())
  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{countervalue}</div>}
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
