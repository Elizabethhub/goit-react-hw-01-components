import React from "react";
import FriendListItem from "../friendList/FriendListItem";
import styles from "../friendList/FriendListItem.module.css";

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
