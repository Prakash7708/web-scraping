import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";

function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}/login`, values);
        localStorage.setItem("react_app_token", login.data.token);
        navigate("/Home");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="contain">
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Username</label>
            <input
              type={"text"}
              placeholder={"Username"}
              className={"form-control"}
              name={"username"}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12">
            <label>Password</label>
            <input
              type={"text"}
              placeholder={"Password"}
              className={"form-control"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input type={"submit"} className={"btn btn-outline-light"} value={"Login"} />
          </div>
          <p>
            Dont have account? <Link to={"/register"} className="sign">Sign-in</Link> <span> <Link to={"/Home"} className="btn btn-outline-light">Skip</Link></span>
           
          </p>
          
        </div>
      </form>
      
    </div>
    
  </div>
  );
}

export default Login;