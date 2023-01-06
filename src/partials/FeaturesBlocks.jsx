import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function FeaturesBlocks() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  return (
    <section className="relative bg-[#111827] " id="research">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-bg-[#1e293b] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-[#1e293b] transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mt-12 pb-8 md:pb-8">
            <h2 className="h2 mb-4 text-white">Our Fields of Research</h2>
            <p className="text-xl text-white ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Items */}
          <div className=" mt-0 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 37.714h5.715L36.57 26.286h8"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      d="M41.143 34.286l3.428 3.428-3.428 3.429"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M41.143 29.714l3.428-3.428-3.428-3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Embedded Systems
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="1.143"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                OT Security
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Wireless Security
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M12.571 4.571V0H0v25.143h12.571V20.57"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M16 12.571h8"
                    />
                    <path
                      className="stroke-current text-white"
                      strokeLinecap="square"
                      d="M19.429 8L24 12.571l-4.571 4.572"
                    />
                    <circle
                      className="stroke-current text-blue-300"
                      strokeLinecap="square"
                      cx="12.571"
                      cy="12.571"
                      r="3.429"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Firmware Analysis
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M20.571 20.571h13.714v17.143H20.571z"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Automotive Security
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-blue-600"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Micro-Architectural Attacks
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-24 text-center">
        <a
          href="/research"
          className="btn text-white  border-white w-full mb-4  sm:w-auto sm:mb-0 rounded-tl-xl rounded-br-xl hover:bg-white hover:scale-110 hover:text-[#111827]"
        >
          More
        </a>
      </div>
      <div className="md:grid md:grid-cols-12 md:gap-6 text-white ml-16">
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 mb-24"
          data-aos="fade-right"
        >
          <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 text-gray-400">
            <h3 className="h3 mb-3">Powerful suite of tools</h3>
            <p className="text-md text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa.
            </p>
          </div>
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
              tab !== 2
                ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                : "bg-gray-200 border-transparent"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                Building the Simple ecosystem
              </div>
              <div className="text-gray-600">
                Take collaboration to the next level with security and
                administrative features built for teams.
              </div>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
              </svg>
            </div>
          </a>
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
              tab !== 2
                ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                : "bg-gray-200 border-transparent"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                Building the Simple ecosystem
              </div>
              <div className="text-gray-600">
                Take collaboration to the next level with security and
                administrative features built for teams.
              </div>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
              </svg>
            </div>
          </a>
          <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
              tab !== 2
                ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                : "bg-gray-200 border-transparent"
            }`}
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
          >
            <div>
              <div className="font-bold leading-snug tracking-tight mb-1 text-gray-400">
                Building the Simple ecosystem
              </div>
              <div className="text-gray-600">
                Take collaboration to the next level with security and
                administrative features built for teams.
              </div>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
              </svg>
            </div>
          </a>
        </div>
        <div
          className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
          data-aos="zoom-y-out"
          ref={tabs}
        >
          <div className="relative flex flex-col text-center lg:text-right">
            <Transition
              show={tab === 1}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={FeaturesBg}
                  width="500"
                  height="462"
                  alt="Features bg"
                />
                <img
                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                  src={FeaturesElement}
                  width="500"
                  height="44"
                  alt="Element"
                  style={{ top: "30%" }}
                />
              </div>
            </Transition>
            <Transition
              show={tab === 2}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={FeaturesBg}
                  width="500"
                  height="462"
                  alt="Features bg"
                />
                <img
                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                  src={FeaturesElement}
                  width="500"
                  height="44"
                  alt="Element"
                  style={{ top: "30%" }}
                />
              </div>
            </Transition>
            <Transition
              show={tab === 3}
              appear={true}
              className="w-full"
              enter="transition ease-in-out duration-700 transform order-first"
              enterStart="opacity-0 translate-y-16"
              enterEnd="opacity-100 translate-y-0"
              leave="transition ease-in-out duration-300 transform absolute"
              leaveStart="opacity-100 translate-y-0"
              leaveEnd="opacity-0 -translate-y-16"
            >
              <div className="relative inline-flex flex-col">
                <img
                  className="md:max-w-none mx-auto rounded"
                  src={FeaturesBg}
                  width="500"
                  height="462"
                  alt="Features bg"
                />
                <img
                  className="md:max-w-none absolute w-full left-0 transform animate-float"
                  src={FeaturesElement}
                  width="500"
                  height="44"
                  alt="Element"
                  style={{ top: "30%" }}
                />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
