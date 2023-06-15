import React from "react";

const FlexColumn = () => {
  return (
    <div>
      <h2 class="title">flex-direction: column</h2>
      <div id="flexColumn">
        <img
          class="plants"
          src="https://res.cloudinary.com/fsa2/image/upload/v1686003257/portfolio%20site%20images/Project%20Images/aloe_xl16ay.png"
          alt="Plant1"
        />
        <img
          class="plants"
          src="https://res.cloudinary.com/fsa2/image/upload/v1686004143/portfolio%20site%20images/Project%20Images/plant_onqctz.png"
          alt="Plant2"
        />
        <img
          class="plants"
          src="https://res.cloudinary.com/fsa2/image/upload/v1686003255/portfolio%20site%20images/Project%20Images/cactus_hssvwq.png"
          alt="Plant3"
        />
      </div>
    </div>
  );
};

export default FlexColumn;
