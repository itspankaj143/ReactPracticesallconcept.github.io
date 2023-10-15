import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribe: "",
    role: "",
  });
  const handleChnage = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldVlaue = type === "checkbox" ? checked : value;
    // console.log(name, fieldVlaue);
    setFormData({
      ...formData,
      [name]: fieldVlaue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
    
      <h1>Form Handling</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChnage}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChnage}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChnage}
          />
        </div>
        <div>
          <label htmlFor="isSubscribe">Subscribe:</label>
          <input
            type="checkbox"
            name="isSubscribe"
            id="isSubscribe"
            value={formData.isSubscribe}
            onChange={handleChnage}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          {/* <input type="checkbox" name="role" id="role" value="" /> */}
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChnage}
          >
            <option value="">Select Role:</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHandling;
