import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Card = (props: Iprop) => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};

export default Card;
