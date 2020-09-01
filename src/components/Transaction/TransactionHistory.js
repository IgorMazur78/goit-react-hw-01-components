import React from "react";
import T from "prop-types";
import style from "./transaction.module.css";

const TransHistory = ({ items }) => {
  return (
    <>
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr className={style.tr}>
            {Object.keys(items[0]).map(
              (e) => e !== "id" && <th key={e}>{e}</th>
            )}
          </tr>
        </thead>
        <tbody className = {style.tbody}>
          {items.map((e) => (
            <tr className={style.tr} key={e.id}>
              <td className ={style.td}>{e.type}</td>
              <td className ={style.td}>{e.amount}</td>
              <td className ={style.td}>{e.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
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
