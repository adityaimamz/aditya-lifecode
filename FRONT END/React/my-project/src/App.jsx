
const Button = (props) => {
  //destructuring
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-sky-600" , children = "..." } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen font-bold items-center">
      <div className="flex gap-4">
        <Button variant="bg-red-600">Register</Button>
        <Button variant="bg-slate-500">Login</Button>
        <Button ></Button>
      </div>
    </div>
  );
}

export default App;
