import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { useLocation } from "react-router-dom";

const App = () => {
  const { search, pathname } = useLocation();
  //console.log(search);
  //console.log(pathname);

  return (
    <div className=" h-screen w-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[3%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
