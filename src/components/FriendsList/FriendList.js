import React from "react";
import T from "prop-types";
import s from "./friendsList.module.css";

const FriendsList = ({ friendsData }) => {
  return (
    <ul className={s.friendList}>
      {friendsData.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <span className={isOnline ? s.statusOn : s.statusOff}></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendsList;
FriendsList.defaultProps = {
  img:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};
FriendsList.T = {
  friend: T.shape({
    avatar: T.string,
    name: T.string.isRequired,
    isOnline: T.bool.isRequired,
    id: T.number.isRequired,
  }),
};
