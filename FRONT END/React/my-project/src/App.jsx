import Button from "./components/Elements/Button/button.jsx"; 
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
