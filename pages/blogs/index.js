import Head from "next/head";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>📚 Binabh's Blogs</title>
        <meta
          name="description"
          content="Collection of technology blogs from frontend, backend, opensource, linux, devops to everything else."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-2 md:p-8">
        <div className="flex gap-4 flex-wrap">
          <div className="bg-github-black/50 border border-white p-2 rounded-md flex text-lg gap-2 font-bold">
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
            <div>📚Blogs</div>
          </div>
          <input
            className="rounded-md bg-github-black/50 border border-white text-lg p-2"
            placeholder="Search blogs 🔍"
          />
        </div>
        <div className="flex flex-col mt-4 gap-4">
          {/* <Link
            href="/blogs/a"
            className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-2"
          >
            <h3 className="text-xl font-extrabold">
              Deploy Next js app into your own vps using build from github
              actions.
            </h3>
            <p className="font-light">⌛ 2 hours ago | 📖 3 min read</p>
          </Link> */}
        </div>
      </main>
    </>
  );
}

export default Index;
