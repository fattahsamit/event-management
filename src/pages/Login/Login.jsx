/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const Login = () => {

  const {user, logIn, googleSignIn} = useContext(AuthContext)

  const handleLogIn = (e) => {

    e.preventDefault()

    const form = e.target 

    const email = form.email.value
    const password = form.password.value

    logIn(email, password) 
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => {
        console.error(error.messsage);
        
  })

  }

  const handleGoogleSignIn = () => {

    googleSignIn()
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error)
      })

  }

  return (
    <div className=" max-w-7xl w-full mx-auto mt-10 bg-gray-100 mb-10">
      <div className="bg-white p-8 shadow-md rounded-md w-72 md:w-3/12 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#0B84BA]"
              placeholder="Enter your email"
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
            Sign In
          </button>
        </form>

        <p className="text-md text-start text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan-500 hover:underline">
              Sign Up
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
              className="rounded-md bg-red-500 hover:bg-red-600 text-white w-full px-3 py-2 inline-flex gap-5 md:gap-10"
            >
              <FaGoogle size={24} />
              <span>Sign in with Google</span>
            </button>
          </div>

      </div>
    </div>
  );
};

export default Login;
