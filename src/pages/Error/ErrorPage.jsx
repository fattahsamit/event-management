import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-primary text-3xl font-semibold">{error.status}</h1>
      <p className="my-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-amber-500 mb-3">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-primary text-white">
        <Link to={"/"}>Get Back</Link>
      </button>
    </div>
  );
}
