import React from "react";
import T from "prop-types";

import s from "./transaction.module.css";

const TransHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          {Object.keys(items[0]).map((e) => e !== "id" && <th key={e}>{e}</th>)}
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tr} key={id}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransHistory;

TransHistory.T = {
  items: T.arrayOf(
    T.shape({
      amount: T.number.isRequired,
      id: T.number.isRequired,
      type: T.string.isRequired,
      currency: T.string.isRequired,
    })
  ).isRequired,
};
