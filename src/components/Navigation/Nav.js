import './Nav.scss';
import { Link,NavLink } from 'react-router-dom';

const Nav =()=> {
    return(
            <div className="topnav">
                <NavLink to="/" exact={true}>Home</NavLink>
                <NavLink to="/product">Products</NavLink>
                <NavLink to="/Todolist">Todolist</NavLink>
            </div>
    )
}

export default Nav;