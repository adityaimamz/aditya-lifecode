/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import Label from "./label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props , ref) => {
  const { label, name, type, placeholder,} = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm