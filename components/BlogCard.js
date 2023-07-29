import moment from "moment/moment";
import Link from "next/link";
import React from "react";

function BlogCard({ data }) {
  return (
    <Link
      href={`/blogs/${data.attributes.slug}`}
      className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
    >
      <h3 className="text-xl font-extrabold">{data.attributes.Title}</h3>
      {data.length && (
        <p className="font-light">
          ⌛ {moment(data.attributes.updatedAt).fromNow()} | 📖{" "}
          {Math.floor(data.length / 900)} min read
        </p>
      )}
    </Link>
  );
}

export default BlogCard;
