import { Link, useRouteError } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-red-500 text-3xl font-semibold">{error.status}</h1>
      <p className="my-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-amber-500 mb-3">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="bg-sky-500 py-2 px-3 rounded-md hover:bg-sky-600 text-white font-medium max-w-fit">
        <Link to={"/"}>Get Back</Link>
      </button>
    </div>
  );
}
