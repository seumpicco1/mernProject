import React, { useEffect, useState } from "react";
import BackButton from "../javascript/BackButton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { set } from "mongoose";



export const Edit = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();


  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  };
  const onChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };
  const onChangeYear = (event) => {
    setPublishYear(event.target.value)
  };
  


  useEffect(() => {
    axios
      .get(`https://mern-deploy-backend-733w.onrender.com/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        console.log(res.data.title);
        setAuthor(res.data.author);
        console.log(res.data.author);
        setPublishYear(res.data.publishYear);
        console.log(res.data.publishYear);
  
      })
      .catch((err) => {
        alert('An error happened. Please Chack console');
        console.log(err.message);
      });
  },[]);

  

  const saveEdit = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:5555/books/${id}`,data)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
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
            value={title}
            onChange={onChangeTitle}
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
            value={author}
            onChange={onChangeAuthor}
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
            value={publishYear}
            onChange={onChangeYear}
            className="bg-gray-50 border
     border-gray-600 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block  p-2.5
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <div className="flex justify-center">
            <button
              onClick={saveEdit}
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
