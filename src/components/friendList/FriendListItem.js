import React from "react";
import PropTypes from "prop-types";
import styles from "../friendList/FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={styles.item}>
      <span className={friend.isOnline ? styles.online : styles.offline}></span>

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
