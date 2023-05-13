import React from "react";

interface Iprop
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Icons = (props: Iprop) => {
  const { alt, ...restProps } = props;
  return (
    <img alt="" {...restProps}>
      Icons
    </img>
  );
};

export default Icons;
