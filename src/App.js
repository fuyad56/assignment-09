import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import Error from "./Components/Error/Error";
import SignUp from "./Components/Signup/SignUp";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/destination"
            element={
              loggedInUser.email ? <Destination /> : <Navigate to="/login" />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
