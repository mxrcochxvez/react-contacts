import React from "react";

const RegisterForm = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUser({
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ width: "24rem" }}>
      <div className="input-group">
        <span className="input-group-text">Username</span>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">Password</span>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <button className="" type="submit">Login</button>
      </div>
    </form>
  );
};

export default RegisterForm;
