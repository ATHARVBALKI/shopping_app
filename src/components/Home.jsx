import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "./../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const {search}=useLocation();
  const category= decodeURIComponent(search.split("=")[1]);
  
  //console.log(category)
  const [filteredProducts,setfilteredProducts]=useState(null);
  //console.log(filteredProducts)
  const getproductscategory=async()=>{
    try {
      const {data}=await axios.get(`/products/category/${category}`)
      setfilteredProducts(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(!filteredProducts ||category=="undefined") setfilteredProducts(products);
    if (category!="undefined") getproductscategory();
  },[category,products]);

  return products ? (
    <>
      <Nav />

      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">
        {filteredProducts && filteredProducts.map((p,i)=>(

       
        <Link key={i}
          to={`/details/${p.id}`}
          className="mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
        >
          <div className="hover:scale-110 w-full  h-[80%] mb-3 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${p.image})`}}></div>

          <h1 className="hover:text-blue-400">{p.title}.</h1>
        </Link>
         ))}
      </div>
    </>
  ) : (
    <Loading></Loading>
  );
};

export default Home;
