import React from "react";

interface Iprop
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = (props: Iprop) => {
  const { label, className, ...restProp } = props;
  return (
    <div className="input">
      <label>{label}</label>
      <input className={className} {...restProp} />
    </div>
  );
};

export default Input;
