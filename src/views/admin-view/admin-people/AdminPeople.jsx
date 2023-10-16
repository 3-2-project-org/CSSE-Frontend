import React, { useState } from "react";

const AdminPeople = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    type: "admin",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const createHeaders = (token) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return headers;
  };

  const createUser = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI0M2Q2ODUxZGNhNTU4NDBjNjY5YmUiLCJ1c2VybmFtZSI6IlR1YW4gRmF6aWQiLCJlbWFpbCI6ImZhemlkc2Ftb29uMzMxQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlzX2xvZ2dlZEluIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMTAtMDlUMTc6NTA6MzIuMjgwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTAtMDlUMTg6MTE6NTIuODQ4WiIsIl9fdiI6MCwiaWF0IjoxNjk3NDgwNzEwLCJleHAiOjE3MDAwNzI3MTB9.DvAWagIjBoN_YSoNmSD513js4UHFnUw3ZysjZfmo-lI"; // Replace with your actual token
      const headers = createHeaders(token);

      const response = await fetch(
        "http://localhost:3007/api/v1/auth/register",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        setError(
          `HTTP error! Status: ${response.status}. Message: ${responseData.message}`
        );
      } else {
        setUser({
          username: "",
          email: "",
          type: "admin",
        });
      }
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <div>
        <h1>User Management</h1>
        {error && <p>Error: {error}</p>}
        <div>
          <h2>Create User</h2>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Username"
          />
          <input
            className="relative flex items-center justify-center"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="type"
            value={user.type}
            onChange={handleInputChange}
            placeholder="Type"
          />
          <button onClick={createUser}>Create User</button>
        </div>
      </div>
    </>
  );
};

export default AdminPeople;
