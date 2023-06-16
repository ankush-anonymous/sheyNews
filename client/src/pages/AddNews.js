import React, { useRef, useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";

import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("sheynews-user"));
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const save = async () => {
    setLoading(true);
    try {
      const payload = {
        title,
        description,
        content,
        postedBy: {
          userid: user._id,
          email: user.email,
        },
      };
      await axios.post("/api/newsitems/addnewsitem", payload);
      setLoading(false);
      // toast("News added successfully", "success");
      navigate("/home");
    } catch (error) {
      console.log(error);
      // toast("Something went wrong", "error");
      setLoading(false);
    }
  };

  return (
    <Layout>
      {loading && <Spinner />}
      <h1 className="text-2xl font-semibold mt-5 ml-5">AddNews</h1>
      <div className="px-5 pt-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border-2 h-10 w-full border-gray-300 px-5 mb-2"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 w-full border-gray-300 px-5 "
          rows="4"
          placeholder="Description"
        ></textarea>
      </div>

      <div className="border-2 border-gray-300 mx-5 rounded px-2">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
        {/* {content} */}
      </div>

      <div className="flex justify-end space-x-5 pr-5 mt-5">
        <button
          className="px-5 py-1 bg-red-700 text-sm text-white"
          onClick={() => navigate("/home")}
        >
          BACK
        </button>
        <button
          className="px-5 py-1 bg-green-500 text-sm text-white"
          onClick={save}
        >
          SAVE
        </button>
      </div>
    </Layout>
  );
};

export default AddNews;
