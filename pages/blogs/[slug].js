import Link from "next/link";
import React from "react";
const path = window.location.href;

function Blog() {
  return (
    <main className="p-2 md:p-8 flex flex-col gap-4">
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
      <div className=" bg-github-black border border-white px-4 md:px-16 py-4 rounded-md flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-extrabold">
            Deploy Next js app into your own vps using build from github
            actions.
          </h3>
          <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
        </div>
        <hr className="text-green" />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <hr className="text-green" />
        <p className="font-bold">Share this on</p>

        <div className="flex flex-wrap gap-4">
          <Link
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?url=${path}&title=${"title"}`}
            className="p-2 bg-linkedin-blue/50 border-linkedin-blue border rounded-md font-bold"
          >
            LinkedIn
          </Link>
          <Link
            target="_blank"
            href={`https://twitter.com/share?url=${path}&text=${"title"}`}
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
            href={`https://wa.me/?text=${"title"} ${path}`}
            className="p-2 bg-whatsapp-green/50 border-whatsapp-green border rounded-md font-bold"
          >
            Whatsapp
          </Link>
          <Link
            target="_blank"
            href={`https://pinterest.com/pin/create/bookmarklet/?media=${"image"}&url=${path}&description=${"title"}`}
            className="p-2 bg-pinterest-red/50 border-pinterest-red border rounded-md font-bold"
          >
            Pinterest
          </Link>
        </div>
      </div>
      <h2 className="text-xl font-bold">
        <span className="text-red">Related</span> Blogs
        <span className="text-orange">;</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/blogs/a"
          className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
        >
          <h3 className="text-xl font-extrabold">
            Deploy Next js app into your own vps using build from github
            actions.
          </h3>
          <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
        </Link>
        <Link
          href="/blogs/a"
          className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
        >
          <h3 className="text-xl font-extrabold">
            Deploy Next js app into your own vps using build from github
            actions.
          </h3>
          <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
        </Link>
        <Link
          href="/blogs/a"
          className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
        >
          <h3 className="text-xl font-extrabold">
            Deploy Next js app into your own vps using build from github
            actions.
          </h3>
          <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
        </Link>
        <Link
          href="/blogs/a"
          className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
        >
          <h3 className="text-xl font-extrabold">
            Deploy Next js app into your own vps using build from github
            actions.
          </h3>
          <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
        </Link>
      </div>
    </main>
  );
}

export default Blog;
