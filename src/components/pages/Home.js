import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-3">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
              <th scope="col">Last Update</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td>{user.name}</td>
                <td>{user.company}</td>
                <td>{user.status}</td>
                <td>{user.lastUpdate}</td>
                <td>{user.notes}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary ms-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger ms-2"
                    onClick={() => deleteUser(user.id)}
                    to=""
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
