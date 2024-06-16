import React from "react";
import "./profile.css";

function Profile() {
  return (
    <React.Fragment>
      <img
        className="profile"
        src="https://avatars.githubusercontent.com/u/52336216?v=4"
        alt="Profile"
      />

      <p className="name">Christian Cale</p>
      <p className="work">Software Developer @ HRC</p>
      <p className="address">Davao City, Philippines</p>
    </React.Fragment>
  );
}

export default Profile;
