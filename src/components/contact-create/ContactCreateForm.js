import React from "react";
import { BsFillHouseFill, BsFillCameraFill } from "react-icons/bs";

const ContactCreateForm = () => {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    profilePic: "",
  });

  const handleInputChange = (event) => {
    setUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        padding: "4rem",
        gap: "1rem"
      }}
    >
      <div>
        <img src={user.profilePic} alt="Profile preview." />
      </div>
      <div>
        <div className="input-group m-1">
          <span className="input-group-text">First</span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="input-group m-1">
          <span className="input-group-text">Last</span>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="input-group m-1">
          <span className="input-group-text">#</span>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="input-group m-1">
          <span className="input-group-text">@</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="input-group m-1">
          <span className="input-group-text">
            <BsFillHouseFill />
          </span>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="input-group m-1">
          <span className="input-group-text">
            <BsFillCameraFill />
          </span>
          <input
            type="text"
            placeholder="Profile Picture Url"
            name="profilePic"
            value={user.profilePic}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div>
          <button className="btn btn-secondary my-2" type="submit">Add Contact</button>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
