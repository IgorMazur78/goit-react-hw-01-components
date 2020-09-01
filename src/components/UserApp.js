import React from "react";
import Section from "./Section";
import user from "../data/users.json";
import statisticData from "../data/statistical-data.json";
import Profile from "./Profile/Profile";
import Statistics from "./Statistic/Statistics";
import friend from "../data/friends .json";
import FriendsList from "./FriendsList/FriendList";
import transaction from "../data/transactions.json";
import TransHistory from "./Transaction/TransactionHistory";



export default function UserApp() {
  console.log(user);
  console.log(statisticData);
  console.log(transaction);

  return (
    <div className="app">
      <Section className="user">
        {user.map((e) => (
          <Profile key={e.id} user={e} />
        ))}
      </Section>
      <Section className="statistic">

      <Statistics  stat={statisticData} title = "Stat"/>
        {/* {statisticData.map((e) => (
          <Statistics key={e.id} stat={e} title = ""/>
        ))} */}
      </Section>

      
        <FriendsList  friend={friend} />
      

      <TransHistory items={transaction} />
    </div>
  );
}
// {transaction.map((e) => <TransHistory key = {e.id} items  ={e} />)}
{
  /* <TransHistory  items  = {transaction} /> */
}
