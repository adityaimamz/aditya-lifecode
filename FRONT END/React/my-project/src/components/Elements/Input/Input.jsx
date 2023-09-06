/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Input = (props) => {
    const{ type , placeholder , name } = props
    return (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              id={name}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            />
    )
};

export default Input;