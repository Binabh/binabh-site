import Head from "next/head";
import Link from "next/link";
import { BASEURL } from "../constants";

export const getServerSideProps = async () => {
  const blog = await fetch(
    `${BASEURL}/blogs?pagination[page]=1&pagination[pageSize]=3&fields[0]=Title&fields[1]=slug&fields[2]=updatedAt`
  );
  const blogData = await blog.json();
  return {
    props: {
      blogs: blogData?.data,
    },
  };
};
export default function Home({ blogs }) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>💻 Binabh's Website</title>
        <meta
          name="description"
          content="Personal website of Binabh Devkota. Tech blogs, articles, guides."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-2 md:p-8">
        <h2 className="text-4xl text-green">
          <span className="text-white">&gt;&gt; </span>
          Hello Visito<span className="vim-caret">r</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-bold">I am</p>
              <p className="text-4xl font-bold">
                <span className="text-red">Binabh</span> Devkota
                <span className="text-orange">;</span>
              </p>
              <div className="text-xl pl-4">
                <p>🕸️🕷️ Web developer</p>
                <p>📱 Mobile app developer</p>
                <p>👷‍♂️ Engineer</p>
                <p>📊 Data Science Student</p>
                <p>🐧 Opensource Enthusiast</p>
              </div>
            </div>
            <div>
              <p className="font-bold">Find me on</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/Binabh"
                  target="_blank"
                  className="p-2 bg-github-black/50 border-github-black border rounded-md font-bold"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.youtube.com/@binabh"
                  target="_blank"
                  className="p-2 bg-youtube-red/50 border-youtube-red border rounded-md font-bold"
                >
                  YouTube
                </Link>
                <Link
                  href="https://www.linkedin.com/in/binabhdevkota/"
                  target="_blank"
                  className="p-2 bg-linkedin-blue/50 border-linkedin-blue border rounded-md font-bold"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com/BinabhDevkota"
                  target="_blank"
                  className="p-2 bg-twitter-blue/50 border-twitter-blue border rounded-md font-bold"
                >
                  Twitter
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold">Mail me at</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  target="_blank"
                  href="mailto:binabhdevkota@gmail.com"
                  className="p-2 flex gap-1 bg-orange/50 border-orange border rounded-md font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  binabhdevkota@gmail.com
                </Link>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("binabhdevkota@gmail.com");
                  }}
                  className="p-2 flex gap-1 bg-green/50 border-green border rounded-md font-bold"
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
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold">Here are my</p>
            <p className="text-4xl font-bold">
              <span className="text-red">Blog</span> Posts
              <span className="text-orange">;</span>
            </p>
            <div className="flex flex-col mt-4 gap-4">
              <div className="flex gap-4 justify-end flex-wrap">
                <input
                  className="rounded-md bg-github-black/50 border border-white text-lg p-2"
                  placeholder="Search blogs 🔍"
                />
                <Link
                  href="/blogs"
                  className="p-2 bg-green/50 border-green border rounded-md font-bold flex justify-center items-center"
                >
                  View all 🧐
                </Link>
              </div>
              {blogs?.map((b) => (
                <Link
                  key={b.id}
                  href={`/blogs/${b.attributes.slug}`}
                  className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
                >
                  <h3 className="text-xl font-extrabold">
                    {b.attributes.Title}
                  </h3>
                  <p className="font-light">⌛ 2 hours ago | 📖 7 min read</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
