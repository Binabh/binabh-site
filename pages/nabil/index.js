import Image from "next/image";
import React from "react";
import CopyButton from "../../components/CopyButton";
import Head from "next/head";

function Bank() {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>💰 Binabh's Bank Details</title>
        <meta
          name="description"
          content="Send money to Binabh's bank account."
        />
        <meta name="image" content="/nabil_qr.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="container mx-auto py-8 h-screen flex justify-center items-center">
        <div className="bg-github-black/50 p-4 border border-white rounded-md flex flex-col gap-4 items-center justify-center w-fit">
          <h3 className="text-2xl font-extrabold">
            <span className="text-[#22b25a]">Binabh&apos;s</span>{" "}
            <span className="text-[#ec1d27]">Nabil Bank Details</span>
          </h3>
          <div className="relative group">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/nabil_qr.jpg";
                link.download = "binabh_nabil_qr.jpg";
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
              src={"/nabil_qr.jpg"}
              width={200}
              height={200}
              alt="bank qr"
              className="rounded-md"
            />
          </div>
          <table>
            <tbody>
              <tr className="group">
                <td className="w-8"></td>
                <td className="font-bold">Bank Name</td>
                <td className=" text-right">Nabil Bank Limited</td>
                <td className="w-8">
                  <CopyButton text="Nabil Bank Limited" />
                </td>
              </tr>
              <tr className="group">
                <td className="w-8"></td>
                <td className="font-bold">Bank Branch</td>
                <td className=" text-right">Dhulikhel</td>
                <td className="w-8">
                  <CopyButton text="Dhulikhel" />
                </td>
              </tr>
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
                <td className="font-bold">Account Number</td>
                <td className=" text-right">4210017503024</td>
                <td className="w-8">
                  <CopyButton text="4210017503024" />
                </td>
              </tr>
              <tr className="group">
                <td className="w-8"></td>
                <td className="font-bold">Swift Code</td>
                <td className=" text-right">NARBNPKA</td>
                <td className="w-8">
                  <CopyButton text="NARBNPKA" />
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
