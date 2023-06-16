import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
      };
      const result = await axios.post("/api/users/login", payload);
      console.log(result);
      alert("Login successful");
      localStorage.setItem("sheynews-user", JSON.stringify(result.data));
      navigate("/home");
      setLoading(false);
    } catch (error) {
      alert("Login failed");
      setLoading(false);
    }
  };
  const register = async () => {
    setLoading(true);
    try {
      const payload = {
        name,
        email,
        password,
      };
      await axios.post("/api/users/register", payload);
      alert("Register successful, Please login");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setShowRegisterForm(false);
      setShowLoginForm(true);
      setLoading(false);
    } catch (error) {
      alert("Register failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("sheynews-user")) navigate("/home");
  }, []);

  return (
    <div className="h-screen flex items-center">
      {loading && <Spinner />}
      <div className="w-1/2 p-5">
        <h1>
          <b className="text-[#3B8F74] text-7xl md:text-8xl">SHEY</b>{" "}
          <b className="text-8xl text-gray-700">NEWS</b>
        </h1>
        <p className="text-lg py-5">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </p>
        <div className="space-x-5">
          <button
            className="bg-gray-300 px-10 py-3"
            onClick={() => {
              setShowLoginForm(false);
              setShowRegisterForm(true);
            }}
          >
            REGISTER
          </button>
          <button
            className="bg-[#3B8F74] px-10 py-3 text-white"
            onClick={() => {
              setShowRegisterForm(false);
              setShowLoginForm(true);
            }}
          >
            LOG IN
          </button>
        </div>
      </div>
      <div className="w-1/2">
        {!showLoginForm && !showRegisterForm && (
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_qmfs6c3i.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        )}
        {showLoginForm && (
          <div className="ml-40">
            <div className="flex flex-col bg-primary h-screen justify-center items-center px-20 space-y-5">
              <h1 className="text-6xl text-gray-500 text-left w-full font-semibold my-5">
                SIGN IN
              </h1>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-500 px-5 mb-2 bg-transparent text-white"
                placeholder="email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-500 px-5 mb-2 bg-transparent text-white"
                placeholder="password"
              />
              <div className="flex justify-end w-full">
                <button
                  className="bg-gray-300 px-10 py-3 hover:bg-gray-400 hover:text-black transition-all duration-500"
                  onClick={() => {
                    login();
                  }}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        )}

        {showRegisterForm && (
          <div className="ml-40 ">
            <div className="flex flex-col bg-primary h-screen justify-center items-center px-20 space-y-5">
              <h1 className="text-6xl text-gray-500 text-left w-full font-semibold my-5">
                REGISTER
              </h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-500 px-5 mb-2 bg-transparent text-white"
                placeholder="name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-500 px-5 mb-2 bg-transparent text-white"
                placeholder="email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-500 px-5 mb-2 bg-transparent text-white"
                placeholder="password"
              />
              <div className="flex justify-end w-full">
                <button
                  className="bg-gray-300 px-10 py-3 hover:bg-gray-400 hover:text-black transition-all duration-500"
                  onClick={() => {
                    register();
                  }}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {(showLoginForm || showRegisterForm) && (
        <AiOutlineClose
          className="absolute top-5 right-5 cursor-pointer hover:bg-gray-400 hover:rounded-full hover:text-white"
          size={30}
          color="white"
          onClick={() => {
            setShowLoginForm(false);
            setShowRegisterForm(false);
          }}
        />
      )}
    </div>
  );
}

export default LandingPage;
