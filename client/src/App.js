// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNews from "./pages/AddNews";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import NewsDesc from "./pages/NewsDesc";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import PostedNewsItem from "./pages/PostedNewsItems";
import EditNews from "./pages/EditNews";

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posted"
            element={
              <ProtectedRoute>
                <PostedNewsItem />
              </ProtectedRoute>
            }
          />
          <Route
            path="/newsdesc/:newsid"
            element={
              <ProtectedRoute>
                <NewsDesc />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:newsid"
            element={
              <ProtectedRoute>
                <EditNews />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("sheynews-user")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
