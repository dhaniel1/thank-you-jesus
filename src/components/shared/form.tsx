import React from "react";

interface Iprop
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const Form = (props: Iprop) => {
  const { children, ...restProp } = props;

  return <form {...restProp}>{children}</form>;
};

export default Form;
