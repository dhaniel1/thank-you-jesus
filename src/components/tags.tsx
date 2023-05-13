import React from "react";
import { Img } from "./shared";

interface Iprop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  heading: string;
  description: string | undefined;
  img: any;
}

const Tags = (props: Iprop) => {
  const { heading, description, img, ...restProp } = props;

  return (
    <>
      <div className="tags">
        <div className="tags__texts">
          <h4>{heading}</h4>
          <p>{description}</p>
        </div>
        <Img className="tags__img" src={img} />
      </div>
      {<div className="tags__line"></div>}
    </>
  );
};

export default Tags;
