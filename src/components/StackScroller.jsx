import React from "react";
import { teckStacks } from "../utilities/DataStore";

const StackScroller = () => {
  return (
    <div className="stack-scroller-container">
      {teckStacks.map((stacks, index) => (
        <div className="stack-scroller-group" key={index}>
          <div className="stack-scroller-inner">
            {stacks.map((stack, index) => (
              <div className="stack-card" key={index}>
                {stack.name}
              </div>
            ))}
          </div>
          <div className="stack-scroller-inner">
            {stacks.map((stack, index) => (
              <div className="stack-card" key={index}>
                {stack.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackScroller;
