import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Login </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <button className="btn btn-primary btn-block">Login</button>
            </form>
            <Link to="/signUp">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
