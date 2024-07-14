
import './LeftNav.css'
import { Link, NavLink } from 'react-router-dom'
import Login from '../Login';
export default function LeftNav(){
    const  location  = window.location.pathname;
    console.log(location)
    return (
      <nav className="left-nav">
        <div className="heading">Book Store</div>

        <div className="links">
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink to="/authors">Authors</NavLink>
          <NavLink to="/publishers">Publishers</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/stores">Stores</NavLink>

          <div className="login">
            <p className="user-image">
              <i className="bi bi-person-circle h1"></i>
            </p>
            <div>
              <NavLink to="/register">Register</NavLink>
              &nbsp; | &nbsp;
              <NavLink to="/Login">Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
}