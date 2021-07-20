import React from "react";
import FriendListItem from "./FriendListItem";
import styles from "../components/FriendListItem.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends}>
      {friends.map((friend) => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
