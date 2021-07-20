import React from "react";
import TransactionsItem from "./TransactionsItem";
import styles from "../components/table.css";

const TransactionHistory = ({ items }) => {
  return (
    <table style={{ display: "block", border: 1, borderColor: "black" }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionsItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
