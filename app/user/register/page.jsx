"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

export default function RegistrationForm() {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (!user.fname || !user.lname || !user.email || !user.password) {
      setError(true);
    } else {
      setError(false);
    }
  }, [setError, user.email, user.password, user.fname, user.lname]);

  async function register() {
    try {
      const response = await axios.post("/api/user/register", user);

      const userInfo = await response.data;
      if (userInfo.status === 201) {
        toast.success("Registration successful. You can now login.");
        router.push("/");
      }
      if (userInfo.status === 500) {
        toast.error("An account with this email already exists. Please login.");
      }
      console.log(userInfo.status);
      return userInfo;
    } catch (error) {
      if (error) {
        toast.error(
          "Could not complete registration. Please check your details and try again."
        );
      }
      throw new Error(error);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    await register();
  }

  return (
    <>
      <div className="flex h-full flex-1 flex-col   justify-center  px-6 py-40 font-themeFont lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for your new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  value={user.fname}
                  type="text"
                  required
                  onChange={(e) => setUser({ ...user, fname: e.target.value })}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  value={user.lname}
                  type="text"
                  required
                  onChange={(e) => setUser({ ...user, lname: e.target.value })}
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={user.email}
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={user.password}
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={error}
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 disabled:cursor-not-allowed focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <p className="mt-2">
                Already have an account?{" "}
                <span className="text-indigo-400 hover:text-indigo-500">
                  <Link href="/user/login">Sign in here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
