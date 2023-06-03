import classes from './Header.module.css';
import {useSelector,useDispatch} from "react-redux"
import { authSliceAcitons } from '../store';


const Header = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state)=>state.authentication.isAuthenticated)

  const logouthandler = () =>{
    dispatch(authSliceAcitons.loggedout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
