/* eslint-disable react/prop-types */
import Label from "./label";
import Input from "./Input";

const InputForm = (props) => {
    const {label , name, type, placeholder } = props;
    return (
          <div className="mb-3">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
          </div>
    )
}

export default InputForm