import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/Axios"
import Loading from "./Loading";

const Details = () => {
 const[product,setproduct] =useState(null);


  const {id}= useParams();
  const getsingleproduct=async()=>{
    try {
      const {data}=await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getsingleproduct();
  },[])
  return ( product ?(
    <div className="w-[70%] flex justify-between items-center gap-x-4 h-full m-auto p-[10%]">
      <img
        className=" w-[50%] object-contain "
        src={product.image}
      ></img>

      <div className=" content  w-[50%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5"> {product.category}</h3>
        <h2 className="text-red-300 mb-3"> {product.price}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link className="py-2 px-5 mr-5 border rounded border-blue-400">Edit</Link>
        <Link className="py-2 px-5 border rounded border-blue-400">Delete</Link>
      </div>
    </div> ) :(<Loading/>)
  );
};

export default Details;
