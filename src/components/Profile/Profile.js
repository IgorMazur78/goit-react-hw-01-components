import React from "react";
import T from "prop-types";

import s from "./Profile.module.css"


const Profile = ({ name, tag, location, avatar, stats}) => {

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {Object.keys(stats).map((e) => (
          <li className = {s.statsItem} key={e}>
            <span className={s.label}>{e}</span>
            <span className={s.quantity}>{stats[e]}</span>
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
