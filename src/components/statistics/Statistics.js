import React from "react";
import StatisticsItem from "../statistics/StatisticsItem";

const Statistics = ({ title, stats }) => {
  return (
    <section
      style={{
        border: 2,
        borderColor: "grey",
        borderRadius: 10,
        padding: 5,
      }}
    >
      {title && (
        <h2
          style={{
            textAlign: "center",
            color: "darkkhaki",
          }}
        >
          {title.toUpperCase()}
        </h2>
      )}

      <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", width: "auto" }}>
        {stats.map((data) => (
          <StatisticsItem data={data} key={data.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
