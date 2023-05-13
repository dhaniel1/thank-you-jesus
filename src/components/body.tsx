import React from "react";
import Tags from "./tags";
import Description from "./description";
import Title from "./title";
import { tagData } from "../mockData";

const Body = () => {
  return (
    <>
      <div className="body">
        <Title>
          {tagData.map((data) => (
            <Tags
              heading={data.header}
              description={data.description}
              img={data.img}
            />
          ))}
        </Title>
        <Description />
      </div>
    </>
  );
};

export default Body;
