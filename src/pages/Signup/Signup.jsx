/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const { logOut, createUser, googleSignIn } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();

        updateProfile(loggedUser, {
          displayName: name,
          photoURL: photo,
        });

        toast.success("Sign Up Successful", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        logOut()
          .then()
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-8xl w-full mx-auto mt-10 bg-gray-100 mb-10">
      <div className="bg-white p-8 shadow-md rounded-md w-72 md:w-3/12 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sign-up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0B84BA]"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0B84BA]"
              placeholder="Enter Photo URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0B84BA]"
              placeholder="Enter Your E-mail"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0B84BA]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0B84BA] text-white font-medium py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-md text-start text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-500 hover:underline">
            Login
          </Link>
        </p>

        <div className="flex items-center justify-center mt-4">
          <hr className="w-1/2 border-gray-300" />
          <p className="mx-4 text-gray-500">Or</p>
          <hr className="w-1/2 border-gray-300" />
        </div>

        <div className="mt-5 w-full flex items-center">
          <button
            onClick={handleGoogleSignIn}
            className="rounded-md bg-red-500 hover:bg-red-600 text-white w-full px-3 py-2 flex justify-center gap-3 md:gap-5"
          >
            <FaGoogle size={24} />
            <span>Sign Up with Google</span>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Signup;
