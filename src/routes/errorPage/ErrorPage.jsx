import { useRouteError } from "react-router-dom";
import "./errorPage.scss";
import Navbar from "../../components/navbar/Navbar";
const ErrorPage = () => {
  const error = useRouteError(); // Access the error details
  console.error(error); // Log the error for debugging

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
