"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showHobbiesDropdown, setShowHobbiesDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      {/* Left Side: Logo or Text */}
      <div className="text-2xl font-bold">
        <span>Your Logo</span>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-grow mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Right Side: Links and Buttons */}
      <div className="flex items-center space-x-6">
        {/* Explore Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowExploreDropdown(!showExploreDropdown)}
            className="flex items-center space-x-1 text-lg"
          >
            <span>Explore</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {showExploreDropdown && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40">
              <Link href="/explore/option1">
                <div className="block px-4 py-2 hover:bg-gray-100">Option 1</div>
              </Link>
              <Link href="/explore/option2">
                <div className="block px-4 py-2 hover:bg-gray-100">Option 2</div>
              </Link>
            </div>
          )}
        </div>

        {/* Hobbies Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowHobbiesDropdown(!showHobbiesDropdown)}
            className="flex items-center space-x-1 text-lg"
          >
            <span>Hobbies</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {showHobbiesDropdown && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40">
              <Link href="/hobbies/option1">
                <div className="block px-4 py-2 hover:bg-gray-100">Option 1</div>
              </Link>
              <Link href="/hobbies/option2">
                <div className="block px-4 py-2 hover:bg-gray-100">Option 2</div>
              </Link>
            </div>
          )}
        </div>

        {/* Other Buttons */}
        <Link href="/bookmarks" className="text-lg">
          Bookmarks
        </Link>
        <Link href="/notifications" className="text-lg">
          Notifications
        </Link>
        <Link href="/cart" className="text-lg">
          Cart
        </Link>
        <Link href="/signin" className="text-lg">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
