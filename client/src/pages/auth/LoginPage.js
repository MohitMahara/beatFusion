import React, { useState } from "react";
import Header from "../../component/layout/header";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const {user, setUser} = useAuth();


  const handleSubmit =  async(e) =>{
     e.preventDefault();
     try {

      const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, {
        email, password
      })


      if(res.data.success){
        toast.success("Login Successfully",{
          autoClose: "1500"
        });

        setUser({
          ...user,
          user : res.data.user,
          token : res.data.token
        });

        localStorage.setItem('beatFusion', JSON.stringify(res.data));

        setTimeout(()=>{
          Navigate("/");
        },2000)
      }
      else{
        toast.error("something went wrong");
      }
          
     } catch (error) {
        toast.error("something went wrong");
        console.log(error);
     }
  }

  return (
    <>
      <Header />
      <div className="container login-container pt-4">
        <form name="loginForm" action="" className="loginForm">
          <h2>Login</h2>
          <div>
            <label for="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
          </div>

          <div>
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
          </div>

          <div>
            <input
              type="submit"
              value="submit"
              className="submitbtn"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
};
