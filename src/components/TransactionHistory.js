import React from "react";
import TransactionsItem from "./TransactionsItem";

const TransactionHistory = ({ items }) => {
  return (
    <table>
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
