import React from "react";
import PropTypes from "prop-types";

const StatisticsItem = ({ data }) => {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBlock: 10,
        paddingInline: 50,
        alignItems: "center",
        border: 2,

        borderInlineColor: "blue",
        borderRadius: 5,
      }}
    >
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    persentage: PropTypes.number,
    label: PropTypes.string,
  }),
};

export default StatisticsItem;
