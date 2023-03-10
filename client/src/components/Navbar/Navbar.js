import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user , dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick =(e) => {
    e.preventDefault();
    dispatch({type : "LOGOUT"})
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {!user && (
          <div className="navItems">
            <button className="navButton">Register</button>
           <Link to="/login"><button className="navButton">Login</button></Link> 
          </div>
        )}
        {user && (
          <div className="navItems">
            hello {user.username}
           <button className="navButton" onClick={handleClick} >Logout</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;