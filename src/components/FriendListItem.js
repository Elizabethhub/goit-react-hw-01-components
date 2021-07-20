import React from "react";
import styles from "../components/FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      {friend.isOnline ? <span className={styles.online}></span> : <span className={styles.offline}> </span>}

      <img className="avatar" src={friend.avatar} alt="Аватар пользователя" width="48" />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;
