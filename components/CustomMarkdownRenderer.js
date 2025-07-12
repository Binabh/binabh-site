import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import Codeblock from "./Codeblock";

export const CustomMarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      className={`flex flex-col gap-2`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        h1: ({ id, children }) => {
          if (id) {
            return (
              <div className="flex gap-2 items-center group -ml-6" id={id}>
                <Link
                  href={`#${id}`}
                  className="invisible group-hover:visible"
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
                </Link>
                <h1 className="font-bold text-4xl text-red">{children}</h1>
              </div>
            );
          }
          return <h1 id={id}>{children}</h1>;
        },
        h2: ({ id, children }) => {
          if (id) {
            return (
              <div className="flex gap-2 items-center group -ml-6" id={id}>
                <Link
                  href={`#${id}`}
                  className="invisible group-hover:visible"
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
                </Link>
                <h2 className="font-bold text-2xl text-green">{children}</h2>
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
              <Codeblock text={children}>
                <SyntaxHighlighter
                  className="rounded-md relative"
                  style={materialDark}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </Codeblock>
            );
          }
          return <code className="p-1 bg-black rounded-md">{children}</code>;
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
        ul: ({ children }) => {
          return <ul className="list-inside list-disc">{children}</ul>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
