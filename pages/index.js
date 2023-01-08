import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full flex flex-col md:flex-row">
        <div className="w-[50%] min-h-full flex flex-col justify-center">
          <h1 className="font-bold text-[5rem]">Alpha Fiendz</h1>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="my-[35px]">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                FiendzVerse
              </span>
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Blog
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="min-h-screen flex items-center justify-center px-16">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="m-8 relative space-y-4">
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                  <div className="flex-1">
                    <div className="h-4 w-48 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                  <div className="flex-1">
                    <div className="h-4 w-56 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                  <div className="flex-1">
                    <div className="h-4 w-44 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}