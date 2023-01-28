import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BASEURL } from "../../constants";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SEOHead from "../../components/SEOHead";
import moment from "moment";
import { data } from "autoprefixer";
import BlogCard from "../../components/BlogCard";

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
  console.log(blog);
  const [path, setPath] = useState("");
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
            }}
            className="p-2 gap-2 bg-orange/50 border-orange border rounded-md font-bold flex justify-center items-center"
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
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <span>Copy Link</span>
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
          <ReactMarkdown
            className={`flex flex-col gap-2`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              h2: ({ id, children }) => {
                if (id) {
                  return (
                    <div className="flex gap-2 -ml-6 items-center">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`${path}#${id}`);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </button>
                      <h2 className="font-bold text-2xl text-green" id={id}>
                        {children}
                      </h2>
                    </div>
                  );
                }
                return <h2 id={id}>{children}</h2>;
              },
              h3: ({ id, children }) => {
                return (
                  <h3 className="text-xl text-orange font-bold" id={id}>
                    {children}
                  </h3>
                );
              },
              a: ({ id, children, href }) => {
                return (
                  <Link href={href} className="font-bold underline" id={id}>
                    {children}
                  </Link>
                );
              },
              code: ({ children, className, inline }) => {
                const match = /language-(\w+)/.exec(className || "");
                if (!inline && match) {
                  return (
                    <div className="relative">
                      <SyntaxHighlighter
                        className="rounded-md relative"
                        style={materialDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(children);
                        }}
                        className="p-2 absolute top-0 right-0"
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
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                }
                return (
                  <code className="p-1 bg-black rounded-md">{children}</code>
                );
              },
              blockquote: ({ children }) => {
                return (
                  <blockquote className="italic font-semibold border-l-4 border-white/50 pl-4 text-white">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-red"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    {children}
                  </blockquote>
                );
              },
              ol: ({ children }) => {
                return <ol className="list-decimal list-inside">{children}</ol>;
              },
            }}
          >
            {blog.attributes.body}
          </ReactMarkdown>
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
              href={`https://pinterest.com/pin/create/bookmarklet/?media=${"image"}&url=${path}&description=${
                blog.attributes.Title
              }`}
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
            <BlogCard data={b} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Blog;
