/* eslint-disable react/prop-types */
const Label = (props) => {
    const {htmlFor , children} = props;
    return (
      <label
        htmlFor={htmlFor}
        className="block text-slate-700 font-sm font-bold mb-1"
      >
        {children}
      </label>
    );
}

export default Label