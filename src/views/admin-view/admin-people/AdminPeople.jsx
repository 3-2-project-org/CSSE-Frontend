import React, { useState } from "react";

const AdminPeople = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    type: "admin",
  });

  const [userId, setUserId] = useState("");
  const [updateFields, setUpdateFields] = useState({});
  const [updatedUser, setUpdatedUser] = useState(null);
  const [userToDisplay, setUserToDisplay] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFields({ ...updateFields, [name]: value });
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
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI0M2Q2ODUxZGNhNTU4NDBjNjY5YmUiLCJ1c2VybmFtZSI6IlR1YW4gRmF6aWQiLCJlbWFpbCI6ImZhemlkc2Ftb29uMzMxQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlzX2xvZ2dlZEluIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMTAtMDlUMTc6NTA6MzIuMjgwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTAtMDlUMTg6MTE6NTIuODQ4WiIsIl9fdiI6MCwiaWF0IjoxNjk3MDI4ODM2LCJleHAiOjE2OTk2MjA4MzZ9.7I5D-KuU_ggG0FLEHbzDXDLKqPzQt_kvozY-LCjvBMQ"; // Replace with your actual token
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setError(error);
    }
  };

  const getUser = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI0M2Q2ODUxZGNhNTU4NDBjNjY5YmUiLCJ1c2VybmFtZSI6IlR1YW4gRmF6aWQiLCJlbWFpbCI6ImZhemlkc2Ftb29uMzMxQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlzX2xvZ2dlZEluIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMTAtMDlUMTc6NTA6MzIuMjgwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTAtMDlUMTg6MTE6NTIuODQ4WiIsIl9fdiI6MCwiaWF0IjoxNjk3MDI4ODM2LCJleHAiOjE2OTk2MjA4MzZ9.7I5D-KuU_ggG0FLEHbzDXDLKqPzQt_kvozY-LCjvBMQ"; // Replace with your actual token
      const headers = createHeaders(token);

      const response = await fetch(
        `http://localhost:3007/api/v1/getUser?id=${userId}`,
        { headers }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserToDisplay(data);
    } catch (error) {
      setError(error);
    }
  };

  const updateUser = async () => {
    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI0M2Q2ODUxZGNhNTU4NDBjNjY5YmUiLCJ1c2VybmFtZSI6IlR1YW4gRmF6aWQiLCJlbWFpbCI6ImZhemlkc2Ftb29uMzMxQGdtYWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlzX2xvZ2dlZEluIjp0cnVlLCJpc19hY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjMtMTAtMDlUMTc6NTA6MzIuMjgwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMTAtMDlUMTg6MTE6NTIuODQ4WiIsIl9fdiI6MCwiaWF0IjoxNjk3MDI4ODM2LCJleHAiOjE2OTk2MjA4MzZ9.7I5D-KuU_ggG0FLEHbzDXDLKqPzQt_kvozY-LCjvBMQ"; // Replace with your actual token
      const headers = createHeaders(token);

      const response = await fetch(
        `http://localhost:3007/api/v1/updateUser?id=${userId}`,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(updateFields),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUpdatedUser(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      {error && <p>Error: {error.message}</p>}
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

      <div>
        <h2>Get User</h2>
        <input
          type="text"
          value={userId}
          onChange={handleUserIdChange}
          placeholder="User ID"
        />
        <button onClick={getUser}>Get User</button>
        {userToDisplay && <pre>{JSON.stringify(userToDisplay, null, 2)}</pre>}
      </div>

      <div>
        <h2>Update User</h2>
        <input
          type="text"
          value={userId}
          onChange={handleUserIdChange}
          placeholder="User ID"
        />
        <input
          type="text"
          name="username"
          value={updateFields.username}
          onChange={handleUpdateInputChange}
          placeholder="Updated Username"
        />
        <input
          type="text"
          name="email"
          value={updateFields.email}
          onChange={handleUpdateInputChange}
          placeholder="Updated Email"
        />
        <input
          type="text"
          name="type"
          value={updateFields.type}
          onChange={handleUpdateInputChange}
          placeholder="Updated Type"
        />

        <button onClick={updateUser}>Update User</button>
        {updatedUser && <pre>{JSON.stringify(updatedUser, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default AdminPeople;
