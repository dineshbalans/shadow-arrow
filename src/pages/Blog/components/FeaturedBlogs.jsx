import React from "react";
import { blogDataWithTags } from "../data/blogData";

const FeaturedBlogs = () => {
  return (
    <div className="bg-[#FFEEE5] px-4 md:px-16 lg:px-9 xl:px-20 py-10 space-y-8">
      <h1 className="text-4xl font-semibold">Featured Blogs</h1>
      <ul className="flex overflow-x-scroll gap-7 pb-2">
        {blogDataWithTags.map(({ id, img, link, title, author, date }) => (
          <li className="flex-shrink-0 w-[35%] border-4">
            <div>
              <img src={img} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedBlogs;
