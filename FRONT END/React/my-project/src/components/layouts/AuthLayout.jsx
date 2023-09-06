/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
    const { children, title } = props;
    return (
      <div className="flex justify-center min-h-screen font-bold items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-blue-500 font-bold text-3xl mb-1">{title}</h1>
          <p className="font-medium text-slate-500 mb-5">
            Please Welcome Your Detail
          </p>
          {children}
        </div>
      </div>
    );
}

export default AuthLayout