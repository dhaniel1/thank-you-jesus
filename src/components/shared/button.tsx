import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: Iprop) => {
  const { children } = props;
  return <button>{children}</button>;
};

export default Button;
