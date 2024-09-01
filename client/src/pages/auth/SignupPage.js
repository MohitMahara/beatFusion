import React, { useState } from "react";
import Header from "../../component/layout/header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";

export const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { name, email, password }
      );


      if (res.data.success) {

        toast.success("User registered Successfully",{
          autoClose: "1500"
        });

        setTimeout(()=>{
          Navigate("/login");
        },2000)


      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <Header />
      <div className="container login-container pt-4">
        <form name="loginForm" action="" className="loginForm">
          <h2>Signup</h2>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <br />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
          </div>

          <div>
            <button
              type="submit"
              className="btn submitbtn"
              onClick={(e) => {handleSubmit(e)}}
            >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
