import React from "react";
import Card from "./Card";

const CardProps = () => {
  return (
    <div className="card-container">
      <Card
        heading={"First heading"}
        paragraph={
          "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete."
        }
      />
      <Card
        heading={"Second heading"}
        paragraph={
          "By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place."
        }
      />
      <Card
        heading={"Third heading"}
        paragraph={
          "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning."
        }
      />
    </div>
  );
};

export default CardProps;
