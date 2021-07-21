import React from "react";
import PropTypes from "prop-types";

const TransactionsItem = ({ item }) => {
  return (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

TransactionsItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.number,
  }),
};

export default TransactionsItem;
