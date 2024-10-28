import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

const Navbar = ({ setSearchTerm }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="bg-white shadow-lg px-4 py-3 fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-400 to-green-700 bg-clip-text text-transparent">
            EventSpot Lite
          </h1>
          <Sparkles className="h-6 w-6 text-cyan-500 animate-pulse" />
        </div>

        <div className="relative hidden md:block w-96">
          <div
            className={`relative transition-all duration-300 ${
              isFocused ? "scale-105" : "scale-100"
            }`}
          >
            <input
              type="text"
              placeholder="Search events..."
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full pl-10 pr-4 py-2 rounded-full border-2 
                focus:outline-none transition-all duration-200
                ${
                  isFocused
                    ? "border-blue-500 shadow-lg shadow-blue-100"
                    : "border-gray-400"
                }
                placeholder-gray-400 text-gray-700`}
            />
            <Search
              className={`absolute left-3 top-2.5 h-5 w-5 transition-colors duration-300 
                ${isFocused ? "text-blue-500" : "text-gray-400"}`}
            />

            <div
              className={`absolute inset-0 -z-10 transition-opacity duration-300 rounded-full
              bg-gradient-to-r from-blue-100 to-purple-100 blur-xl
              ${isFocused ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
