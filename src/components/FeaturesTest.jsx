import React from "react";
import { features } from "../constants";

const FeaturesTest = () => {
  return (
    <section>
      <div className="container">
        <div className="relative z-2 flex">
          {features.map((feature) => {
            const { id, icon, title, caption, text } = feature;
            return <div key={id}>{title}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesTest;
