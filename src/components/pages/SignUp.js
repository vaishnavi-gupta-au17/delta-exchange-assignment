import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
            <h2 className="text-center mb-4">Sign Up </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>
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
              {error && <div>{error}</div>}
              <button className="btn btn-primary btn-block">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
