import React from "react";
import Profile from "./Profile";
import user from "../Data/user.json";
import FriendList from "./FriendList";
import friends from "../Data/friends.json";
import statisticalData from "../Data/statistics.json";
import Statistics from "./Statistics";
import TransactionHistory from "./TransactionHistory";
import transactions from "../Data/transactions.json";

const App = () => {
  return (
    <>
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;