import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'
import { format } from 'date-fns';
import BackButton from '../javascript/BackButton';


export const Show = () => {

const [book,setBooks] = useState({})
const {id}  = useParams()




useEffect(()=>{
            axios
            .get(`https://mern-deploy-backend-733w.onrender.com/books/${id}`)
            .then((res)=>{
                        setBooks(res.data)
                        console.log(book);

            }).catch((err)=>{
                        console.log(err);

            })
            
            

},[])
 function time (x){  return new Date(x).toTimeString() }


  return (
    
   <div>
           {/* <h1>{book.title}</h1> 
           <h1>{book.author}</h1> 
           <h1>{book.publishYear}</h1> 
           <h1>{ new Date(book.createdAt).toTimeString()}</h1> 
           <h1>{ new Date(book.updatedAt).toTimeString()}</h1>  */}
           <div class="col-span-12 md:col-span-6 lg:col-span-4 md:order-1 grid gap-4 xl:gap-6">
            <div>
            <BackButton/>
            </div>
          
            <div class="relative overflow-hidden w-full h-full rounded-xl">
              <div class="p-6 flex bg-white flex-col justify-between md:min-h-[480px] text-center rounded-xl dark:border-gray-700">
                <div>
               

                  <h1 class="text-4xl  font-semibold text-gray-800 dark:text-gray-200">
                   Details
                  </h1>
                
                </div>

                <div class="mt-8">
              
                  <ul class="flex flex-col text-left space-y-1.5">
                    <li class="relative flex gap-x-4 pb-7 overflow-hidden">
                      <div class="mt-0.5 relative h-full">
                        <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600"></div>
                        
                      </div>
                      <span class="front-medium text-2xl">Title :</span> 
                      <p class="  py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-blue-100 border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                       <span class="font-semibold text-gray-800 dark:text-gray-200 text-2xl ">  {book.title}</span>
                      </p>
                    </li>

                    <li class="relative flex gap-x-4 pb-7 overflow-hidden">
                      <div class="mt-0.5 relative h-full">
                        <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600"></div>
                       
                      </div>
                      <span class="front-medium text-2xl">Author :</span> 
                      <p class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-blue-100 border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                        <span class="font-semibold text-gray-800 dark:text-gray-200 text-2xl">{book.author}</span> 
                      </p>
                    </li>

                    <li class="relative flex gap-x-4 pb-7 overflow-hidden">
                      <div class="mt-0.5 relative h-full">
                        <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600"></div>
                        
                      </div>
                      <span class="front-medium text-2xl">Publish year :</span> 
                      <p class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-blue-100 border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                        <span class="font-semibold text-gray-800 dark:text-gray-200 text-2xl">{book.publishYear}</span>
                      </p>
                    </li>

                    <li class="relative flex gap-x-4 pb-7 overflow-hidden">
                      <div class="mt-0.5 relative h-full">
                        <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600"></div>
                       
                      </div>
                      <span class="front-medium text-2xl">Create on :</span> 
                      <p class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-blue-100 border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                        <span class="font-semibold text-gray-800 dark:text-gray-200 text-2xl">{time(book.createdAt)}</span> 
                      </p>
                    </li>

                    <li class="relative flex gap-x-4 pb-7 overflow-hidden">
                      <div class="mt-0.5 relative h-full">
                        <div class="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dashed border-gray-300 dark:border-gray-600"></div>
                        
                      </div>
                      <span class="front-medium text-2xl">Update on :</span> 
                      <p class="py-1.5 px-2.5 rounded-full text-xs font-medium text-gray-600 bg-blue-100 border border-gray-200 shadow-sm dark:text-gray-400 dark:bg-slate-900 dark:border-gray-700">
                        <span class="font-semibold text-gray-800 dark:text-gray-200 text-2xl">{ time(book.updatedAt)}</span> 
                      </p>
                    </li>
                  </ul>
                 
                </div>
              </div>

              <div class="absolute top-1/2 -left-1/2 -z-[1] w-60 h-32 bg-purple-200 blur-[100px] -translate-y-1/2 dark:bg-violet-900/30"></div>
            </div>
          
         

          
        </div>

   </div>
  )
}
