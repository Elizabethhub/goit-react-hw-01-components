import React from "react";
import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transactions/TransactionHistory";

import user from "../data/user.json";
import friends from "../data/friends.json";
import statisticalData from "../data/statistics.json";
import transactions from "../data/transactions.json";

const App = () => {
  return (
    <div className="container">
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
