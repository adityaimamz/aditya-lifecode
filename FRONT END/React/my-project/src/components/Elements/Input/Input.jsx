/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

/* eslint-disable no-unused-vars */
const Input = forwardRef((props, ref) => {
    const{ type , placeholder , name } = props
    return (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              id={name}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              ref={ref}
            />
    )
});

export default Input;