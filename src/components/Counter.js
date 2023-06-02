import classes from './Counter.module.css';
import {useSelector} from "react-redux"

const Counter = () => {
  const toggleCounterHandler = () => {};

  const countervalue = useSelector((state)=>state.counter)

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{countervalue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;