import React from "react";
import styles from "../components/table.css";

const TransactionsItem = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

export default TransactionsItem;
