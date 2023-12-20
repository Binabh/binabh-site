import Image from "next/image";
import React from "react";
import CopyButton from "../../components/CopyButton";
import Head from "next/head";

function Bank() {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>💰 Binabh's e-Sewa Details</title>
        <meta
          name="description"
          content="Send money to Binabh's e-Sewa account."
        />
        <meta name="image" content="https://binabh.com.np/esewa_qr.jpg" />
        <meta name="og:image" content="https://binabh.com.np/esewa_qr.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="container mx-auto py-8 h-screen flex justify-center items-center">
        <div className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-4 items-center justify-center w-fit">
          <h3 className="text-2xl font-extrabold">
            <span className="text-white">Binabh&apos;s</span>{" "}
            <span className="text-[#66be4d]">e-Sewa Details</span>
          </h3>
          <div className="relative group">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/esewa_qr.jpg";
                link.download = "binabh_esewa_qr.jpg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="absolute top-1 right-1 hidden group-hover:block bg-github-black/90 rounded-md p-1 border border-white text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
            <Image
              src={"/esewa_qr.jpg"}
              width={200}
              height={200}
              alt="esewa qr"
              className="rounded-md"
            />
          </div>
          <table>
            <tbody>
              <tr className="group">
                <td className="w-8"></td>
                <td className="font-bold">Account Name</td>
                <td className=" text-right">Binabh Devkota</td>
                <td className="w-8">
                  <CopyButton text="Binabh Devkota" />
                </td>
              </tr>
              <tr className="group">
                <td className="w-8"></td>
                <td className="font-bold">Number</td>
                <td className=" text-right">9844910177</td>
                <td className="w-8">
                  <CopyButton text="9844910177" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Bank;
