import React from "react";
import T from "prop-types";
import style from "./friendsList.module.css";

const FriendsList = ({ friend }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friend.map(
          (e) =>
            e !== "id" && (
              <li key={e.id} className={style.item}>
                <span
                  className={e.isOnline ? style.statusOn : style.statusOff}
                ></span>
                <img
                  className={style.avatar}
                  src={e.avatar}
                  alt={e.name}
                  width="48"
                />
                <p className={style.name}>{e.name}</p>
              </li>
            )
        )}
      </ul>
    </>
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
