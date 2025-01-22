import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
        <a
          href="/"
          title="PySpur"
          className="relative mr-6 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-auto h-[40px]"
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>
          <span className="font-bold text-xl">PySpur</span>
        </a>
        <div className="max-w-6xl mx-auto border-t py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1">
          <span className="text-sm tracking-tight text-foreground">
            Copyright © 2025 Sevn AI Inc.
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-foreground">
            <li className="mr-3 md:mx-4">
              <a target="_blank" rel="noopener noreferrer" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="mr-3 md:mx-4">
              <a target="_blank" rel="noopener noreferrer" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
