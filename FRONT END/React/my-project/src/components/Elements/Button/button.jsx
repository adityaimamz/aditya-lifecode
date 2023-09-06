 const Button = (props) => {
  //destructuring
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-sky-600", children = "..." } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
