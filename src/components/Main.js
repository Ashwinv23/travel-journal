import React from "react";
import Data from "../Data";
import Card from "./Card";

function Main() {
  return (
    <div className="ml-20 mt-16">
      {Data.map((item) => {
        return <Card key={item.title} {...item} />;
      })}
    </div>
  );
}

export default Main;
