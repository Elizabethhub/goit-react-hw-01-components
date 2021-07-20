import React from "react";

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
      key={data.id}
    >
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}</span>
    </li>
  );
};

export default StatisticsItem;
