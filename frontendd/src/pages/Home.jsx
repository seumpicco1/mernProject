import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { Bs0Circle, BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import ConfirmBox from "../javascript/ConfirmBox";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});

  function loadBook(){
    axios.get("https://mern-deploy-backend-733w.onrender.com/books").then((res) => {
        setBooks(res.data);
  }).catch((err) => {
        console.log(err)
        setLoading(false);

  })
}

useEffect(() => {
  setLoading(false)
  loadBook();
 
  // setLoading(true);
  // axios
  //   .get("http://localhost:5555/books")
  //   .then((res) => {
  //     setBooks(res.data.data);
  //     console.log(books);

  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     setLoading(false);
  //   });
  
}, []);

      function deleteBook(){
axios.delete(`https://mern-deploy-backend-733w.onrender.com/books/${deleteData._id}`)
.then((res)=>{
        loadBook()
        ,setOpen(false)
      }
)
console.log(deleteData);

      }

      function openDelete(data) {
        setOpen(true)
        setDeleteData(data)
        
      }

 
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl my-8 text-cyan-500 "> Anime List</h1>
        <div className="pr-10 text-5xl">
          <Link to="/books/create">
          <MdOutlineAddBox className="text-green-500" />
        </Link></div>
        
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="text-blue-500">
              <th className="border  bg-blue-100 border-stone-500 rounded-md">
                No
              </th>
              <th className="border  bg-blue-100 border-stone-500 rounded-md">
                Title
              </th>
              <th className="border  bg-blue-100 border-stone-500 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border  bg-blue-100 border-stone-500 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border  bg-blue-100 border-stone-500 rounded-md max-md:hidden">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8 border">
                <td className=" border-stone-500 rounded-md text-center">
                  {index + 1}
                </td>
                <td className=" border-stone-500 rounded-md text-center">
                  {book.title}
                </td>
                <td className=" border-stone-500 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className=" border-stone-500 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>

                <td className=" border-stone-500 rounded-md text-center max-md:hidden">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                    🔎
                    </Link>

                    <Link to={`/books/edit/${book._id}`}>
                            ✏
                    </Link>

                    <Link  onClick={()=> openDelete(book)}>
                        ❌
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ConfirmBox 
      open={open}
               closeDialog = {()=>setOpen(false)}
              //  title={deleteData?.title}
               deleteFuction={deleteBook}
              title={deleteData.title}
      />
    </div>
  );
};
