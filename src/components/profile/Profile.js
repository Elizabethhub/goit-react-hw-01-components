import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "auto",
        padding: 50,
        backgroundColor: "grey",
        textAlign: "center",
        marginBottom: 10,
        border: 2,
        borderRadius: 5,
        alignItems: "center",
      }}
    >
      <div className="description">
        <img style={{ width: "auto" }} src={avatar} alt="Аватар пользователя" className="avatar" width="300" />
        <p style={{ textAlign: "center", fontSize: 40 }}>{name}</p>
        <p style={{ marginBottom: 10 }}>
          <i>{tag}</i>
        </p>
        <p style={{ marginBottom: 10 }}>{location}</p>
      </div>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderStyle: "solid",
          borderColor: "purple",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <li>
          <span className="label">Followers:</span>
          <span style={{ margin: 5 }}>{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span style={{ margin: 5 }}>{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span style={{ margin: 5 }}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
