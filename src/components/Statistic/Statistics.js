import React from "react";
import T from "prop-types";
import s from "./statistic.module.css";

const withoutTitle = "";

const Statistics = ({ data, title }) => {
  return (
    <div className={s.containerStat}>
      {title ? (
        <h2 className={s.title}>{title}</h2>
      ) : (
      <h2 className={s.title}>{withoutTitle}</h2>
      )}
      <ul className={s.statList}>
        {data.map(({id,label,percentage}) => (
          <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
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
