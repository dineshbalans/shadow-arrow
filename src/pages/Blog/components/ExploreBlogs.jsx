import React from "react";
import { FaSearch } from "react-icons/fa";
import RecentBlogs from "./RecentBlogs";

const ExploreBlogs = () => {
  return (
    <div className="w-[37%] border bg-gradient-to-tr from-black  to-primary rounded-lg px-6
    text-white py-6 space-y-8">
      <div className="space-y-5">
        <h1 className="text-3xl font-medium text-primary">Explore Blogs</h1>
        <div className="border-2 border-primary rounded flex bg-black/30 items-center p-2 pr-3 gap-6">
          <input
            type="text"
            className="h-full w-full py-1 px-2 bg-transparent text-cement/80 outline-none peer"
            placeholder="Search"
          />
          <FaSearch className="scale-[1.5] text-primary peer-focus:text-cement/80 cursor-pointer" />
        </div>
      </div>
      <RecentBlogs />
      {/* Categories */}
      {/* Tags */}
    </div>
  );
};

export default ExploreBlogs;
