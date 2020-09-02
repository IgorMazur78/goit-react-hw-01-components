import React from "react";

import user from "../data/users.json";
import statisticData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transaction from "../data/transactions.json";

import Profile from "./Profile/Profile";
import Statistics from "./Statistic/Statistics";
import FriendsList from "./FriendsList/FriendList";
import TransHistory from "./Transaction/TransactionHistory";

const App = () => {
  return (
    <div className="app">
      <Profile {...user} />

      <Statistics data={statisticData} title="" />

      <FriendsList friendsData={friends} />

      <TransHistory items={transaction} />
    </div>
  );
};

{
}
export default App;
