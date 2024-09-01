import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { useAuth } from "../../contexts/authContext";

function Header() {

  const {user, setUser} = useAuth();
  const navigate = useNavigate();


  const handleLogout = () =>{
    setUser({
      ...user,
      user : null,
      token : ""
    })
  
    localStorage.removeItem('beatFusion');

    navigate('/login');

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ps-4 pe-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="b1">B</span>eat<span className="b2">F</span>usion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse ps-4" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Playlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                   Liked Songs
                </Link>
              </li>            

            </ul>
            <form className="d-flex w-50 searchBox p-1">
              <CiSearch  className="icon ms-2"/>
              <input
                className="form-control me-2 search"
                type="search"
                placeholder= "Search..."
                aria-label="Search"
              />

              <input type="submit" hidden>
              </input>
            </form>

            <ul className="navbar-nav me-4">

         {user?.user ?     
            <>   
              <li className="nav-item">
                <Link className="nav-link d-flex profileContainer" href="#">
                <FaRegCircleUser />
                <p>{user?.user.name}</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className = "nav-link " onClick={handleLogout}>
                   Log out
                </Link>
              </li>
              
              
          </>   :    

          <>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Signup
                </NavLink>
              </li>
           </>

         }

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
