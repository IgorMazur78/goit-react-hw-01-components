import React from "react";
import T from "prop-types";
import style from "./Profile.module.css"


const Profile = ({ user}) => {
  const { name, tag, location, avatar, stats } = user;

  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        {Object.keys(stats).map((e,i) => (
          <li className = {style.statsItem}key={e}>
            <span className={style.label}>{e}</span>
            <span className={style.quantity}>{stats[e]}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

Profile.defaultProps = {
  img:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.T = {
  user: T.shape({
    avatar: T.string.isRequired,
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    stats: T.exact({
      label: T.string.isRequired,
      quantity: T.number.isRequired,
    }).isRequired,
  }),
};
export default Profile;
