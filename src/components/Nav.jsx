import React from "react";
import { useContext } from "react";
import { ProductContext } from "./../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  //console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()} ,${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()},0.4)`;

  }; 
 // console.log(color())

  return (
    <nav className="bg-zinc-50 h-full  w-[15%] pt-5 flex flex-col items-center">
      <a className="py-3 px-5 border rounded border-blue-400" href="/create">
        {" "}
        Add New Products
      </a>
      <hr className="my-3 w-[80%]"></hr>
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center mb-3"
          >
            <span style={{backgroundColor :color()}} className={`rounded-full mr-2 w-[15px] h-[15px]  `}></span>
            {c}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
