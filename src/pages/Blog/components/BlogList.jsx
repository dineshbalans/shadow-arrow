import React from "react";
import { blogDataWithTags } from "../data/blogData";
import BlogItemWTags from "./BlogItemWTags";

const BlogList = ({ style }) => {
  return (
    <div className="flex flex-col border w-[59%] space-y-10">
      <ul className={`${style}  space-y-7`}>
        {blogDataWithTags.map(
          ({ id, img, title, desc, author, date, tags, link }) => (
            <BlogItemWTags
              key={id}
              style=""
              {...{ id, img, title, desc, author, date, tags, link }}
            />
          )
        )}
      </ul>
      <div>Pagination</div>
    </div>
  );
};

export default BlogList;
