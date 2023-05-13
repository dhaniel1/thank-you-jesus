import React from "react";

interface Iprop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Title = (props: Iprop) => {
  const { children, ...restProps } = props;
  return (
    <div className="title" {...restProps}>
      {children}
    </div>
  );
};

export default Title;
