import React from "react";
import T from "prop-types";
import style from "./statistic.module.css";

const Statistics = ({ stat, title }) => {
  return (
    <div className={style.containerStat}>
      {title.length > 0 ? (
        <h2 className={style.title}>{title}</h2>
      ) : (
        <h2 className={style.title}></h2>
      )}
      <ul className={style.statList}>
        {stat.map((e) => (
          <li key={e.id} className={style.item}>
            <span className={style.label}>{e.label}</span>
            <span className={style.percentage}>{e.percentage}</span>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.T = {
  title: T.string,
  stat: T.shape({
    id: T.number.isRequired,
    label: T.string.isRequired,
    percentage: T.number.isRequired,
  }),
};
