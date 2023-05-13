import React from "react";

interface Iprop
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Img = (props: Iprop) => {
  const { ...restProps } = props;
  return <img alt="" {...restProps} />;
};

export default Img;
