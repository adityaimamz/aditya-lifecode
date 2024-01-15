import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
      <div className="flex flex-col justify-center min-h-screen items-center">
        <h1 className="font-bold text-3xl mb-5">Opps!</h1>
        <p className="font-medium  mb-5">Sorry, an unexpected error has occurred</p>
        <p className="font-medium ">Error: {error.statusText || error.message}</p>
      </div>
    );
}

export default ErrorPage