import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../javascript/BackButton";
export const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("https://mern-deploy-backend-733w.onrender.com/books/create", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Error Please check your console");
      });
  };

  return (
    <div className="pl-6 ">
      <BackButton />
      <div className="p-4 flex justify-center ">
        <div className="mb-6 space-y-5 border border-gray-600 rounded-md p-2 ">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            id="default-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border
     border-gray-600 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block  p-2.5
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Author
          </label>
          <input
            type="text"
            id="default-input"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-gray-50 border
     border-gray-600 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block  p-2.5
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            PublishYear
          </label>
          <input
            type="text"
            id="default-input"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="bg-gray-50 border
     border-gray-600 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block  p-2.5
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <div className="flex justify-center">
            <button
              onClick={saveBook}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
