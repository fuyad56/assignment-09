import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../../firebaseConfig";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  // Context api
  const [, setLoggedInUser] = useContext(UserContext);

  // User info
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    success: "",
    error: ""
  });
  setLoggedInUser(user);

  // handle blur
  const handleBlur = e => {
    const { name, value } = e.target;
    let isFieldValid = true;
    if (name === "email") {
      const re = /^\S+@\S+\.\S+$/;
      isFieldValid = re.test(value);
    }
    if (name === "password") {
      const isPasswordHasNumber = /\d{1}/.test(value);
      const isPasswordLengthValid = value.length >= 6;
      isFieldValid = isPasswordHasNumber && isPasswordLengthValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[name] = value;
      setUser(newUserInfo);
    }
  };

  // handle submit
  const handleSubmit = e => {
    const { email, password } = user;
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(result => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  // Google Sign in
  const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(gProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const isLogin = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          password: "",
          success: true,
          error: ""
        };
        setUser(isLogin);
        console.log(isLogin);
      })
      .catch(error => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };

  // Sign in with Facebook
  const handleFaceBookSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const isLogin = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          password: "",
          success: true,
          error: ""
        };
        setUser(isLogin);
        console.log(isLogin);
      })
      .catch(error => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };

  return (
    <div>
      <div className="text-center mt-5">
        {user.success
          ? <p style={{ color: "green" }}>User logged in Successfully!</p>
          : <p style={{ color: "red" }}>
              {user.error}
            </p>}
      </div>
      <div className="flex flex-col justify-center items-center mt-[80px]">
        <div className="bg-[#eee] rounded-lg shadow-md h-auto px-[80px] pt-[80px] pb-[40px] w-[30rem] laptop:w-[30rem] mobile:w-[25rem]">
          <h1 className="text-3xl pb-5 text-center">Login</h1>
          <form
            action=""
            className="flex flex-col justify-between items-center laptop:w-[20rem] mobile:w-[250px]"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onBlur={handleBlur}
              className="pl-2 h-10 w-full border-b-2 border-black  mt-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onBlur={handleBlur}
              className="pl-2 h-10 w-full border-b-2 border-black  mt-4"
              required
            />
            <input
              type="submit"
              value="Login"
              className="h-10 w-full mt-4 px-[16px] py-[8px] rounded bg-[#FF6E40] text-white cursor-pointer"
            />
          </form>
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span className="underline text-[#FF6E40]">Sign Up</span>
            </Link>
          </p>
        </div>
        <p className="mt-10">Or</p>
        <div className="mt-[30px] h-[100px] flex flex-col justify-between items-center">
          <button
            onClick={handleGoogleSignIn}
            className="border-2 bg-[#eee flex flex-row justify-between items-center px-[16px] py-[8px] rounded-full w-[250px]"
          >
            <FaGoogle /> Sign in with Google
          </button>
          <button
            onClick={handleFaceBookSignIn}
            className="border-2 bg-[#eee flex flex-row justify-between items-center px-[16px] py-[8px] rounded-full w-[250px]"
          >
            <FaFacebook /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
