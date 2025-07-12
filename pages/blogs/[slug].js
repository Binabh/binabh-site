import Link from "next/link";
import { useEffect, useState } from "react";
import { BASEURL } from "../../constants";
import SEOHead from "../../components/SEOHead";
import moment from "moment";
import BlogCard from "../../components/BlogCard";
import { CustomMarkdownRenderer } from "../../components/CustomMarkdownRenderer";

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const blog = await fetch(
    `${BASEURL}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );
  const blogData = await blog.json();
  return {
    props: {
      blog: blogData?.data[0],
    },
  };
};
function Blog({ blog }) {
  const [path, setPath] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    setPath(window.location.href);
  }, []);

  return (
    <>
      <SEOHead seo={blog.attributes.seo} />
      <main className="p-2 md:p-8 flex flex-col gap-4 container mx-auto">
        <div className="flex gap-4 flex-wrap">
          <header className="bg-github-black/50 border border-white p-2 rounded-md flex text-lg gap-2 font-bold">
            <Link href="/">🏠Home</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <Link href="/blogs">📚Blogs</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div>📝Post</div>
          </header>
          <button
            onClick={() => {
              window.print();
            }}
            className="p-2 gap-2 bg-twitter-blue/50 border-twitter-blue border rounded-md font-bold flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Download</span>
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(path);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            }}
            className="p-2 gap-2 bg-orange/50 border-orange border rounded-md font-bold flex justify-center items-center"
          >
            {isCopied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
                Copied
              </>
            ) : (
              <>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
                Copy Link
              </>
            )}
          </button>
        </div>
        <article className=" bg-github-black border border-white px-4 md:px-16 py-4 rounded-md flex flex-col gap-4">
          <div>
            <h3 className="text-3xl font-extrabold">{blog.attributes.Title}</h3>
            <p className="font-light">
              ⌛ {moment(blog.attributes.updatedAt).fromNow()} | 📖{" "}
              {Math.floor(blog.length / 900)} min read
            </p>
          </div>
          <hr className="text-green" />
          <CustomMarkdownRenderer content={blog.attributes.body} />
          <hr className="text-green" />
          <p className="font-bold">Share this on</p>

          <div className="flex flex-wrap gap-4">
            <Link
              target="_blank"
              href={`https://www.linkedin.com/shareArticle?url=${path}&title=${blog.attributes.Title}`}
              className="p-2 bg-linkedin-blue/50 border-linkedin-blue border rounded-md font-bold"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              href={`https://twitter.com/share?url=${path}&text=${blog.attributes.Title}`}
              className="p-2 bg-twitter-blue/50 border-twitter-blue border rounded-md font-bold"
            >
              Twitter
            </Link>
            <Link
              target="_blank"
              href={`https://www.facebook.com/sharer.php?u=${path}`}
              className="p-2 bg-facebook-blue/50 border-facebook-blue border rounded-md font-bold"
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              href={`https://wa.me/?text=${blog.attributes.Title} ${path}`}
              className="p-2 bg-whatsapp-green/50 border-whatsapp-green border rounded-md font-bold"
            >
              Whatsapp
            </Link>
            <Link
              target="_blank"
              href={`https://pinterest.com/pin/create/bookmarklet/?url=${path}&description=${blog.attributes.Title}`}
              className="p-2 bg-pinterest-red/50 border-pinterest-red border rounded-md font-bold"
            >
              Pinterest
            </Link>
          </div>
        </article>
        <h2 className="text-xl font-bold">
          <span className="text-red">Related</span> Blogs
          <span className="text-orange">;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blog.attributes.relatedBlogs.data.map((b) => (
            <BlogCard key={b.id} data={b} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Blog;
