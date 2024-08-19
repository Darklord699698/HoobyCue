"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showHobbiesDropdown, setShowHobbiesDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 relative">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Image src="/icons/menu.png" alt="Menu Icon" width={24} height={24} />
      </button>

      {/* Sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="w-64 bg-white h-full p-4">
            <button
              className="text-gray-800 text-xl mb-4"
              onClick={() => setShowSidebar(false)}
            >
              &times;
            </button>
            <div className="flex flex-col space-y-4">
              <Link href="/explore/option1">
                <div className="block px-4 py-2 hover:bg-gray-100">Explore Option 1</div>
              </Link>
              <Link href="/explore/option2">
                <div className="block px-4 py-2 hover:bg-gray-100">Explore Option 2</div>
              </Link>
              <Link href="/hobbies/option1">
                <div className="block px-4 py-2 hover:bg-gray-100">Hobbies Option 1</div>
              </Link>
              <Link href="/hobbies/option2">
                <div className="block px-4 py-2 hover:bg-gray-100">Hobbies Option 2</div>
              </Link>
              <Link href="/bookmarks" className="flex items-center">
                <Image src="/icons/bookmark.png" alt="Bookmarks Icon" width={24} height={24} />
                <span className="ml-2">Bookmarks</span>
              </Link>
              <Link href="/cart" className="flex items-center">
                <Image src="/icons/grocery-store.png" alt="Cart Icon" width={24} height={24} />
                <span className="ml-2">Cart</span>
              </Link>
              <Link href="/signin" className="flex items-center">
                <span className="ml-2">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Header Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Mobile View: Header in one line */}
        <div className="flex items-center space-x-4 w-full md:hidden mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-3xl font-bold">
              H
            </div>
            <div className="text-2xl font-bold">
              <span>Hobbycue</span>
            </div>
          </div>
          <div className="flex flex-col ml-2"> {/* Adjust margin-left here */}
            <div className="text-xs text-gray-600">
              <span>Your Hobby, Your Community</span>
            </div>
          </div>
          <div className="relative flex-grow flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg pr-16 h-10"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center w-12 h-10 bg-purple-500 rounded-r-lg">
              <Image
                src="/icons/loupe.png"
                alt="Search Icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <Link href="/notifications" className="flex items-center">
            <Image src="/icons/bell.png" alt="Notifications Icon" width={24} height={24} />
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex md:items-center md:space-x-6 w-full">
          {/* Left Side: Logo or Text */}
          <div className="flex flex-col items-center space-y-2 mb-1">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full text-3xl font-bold">
                H
              </div>
              <div className="text-2xl font-bold">
                <span>Hobbycue</span>
              </div>
            </div>
            <div className="text-xs text-gray-600 mt-1 ml-2"> {/* Adjust margin-left and margin-top here */}
              <span>Your Hobby, Your Community</span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="relative flex-grow mx-8 flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg pr-16 h-10"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center w-12 h-10 bg-purple-500 rounded-r-lg">
              <Image
                src="/icons/loupe.png"
                alt="Search Icon"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Right Side: Icons and Buttons */}
          <div className="flex items-center space-x-6">
            {/* Explore Dropdown */}
            <div className="relative flex items-center space-x-2">
              <Image src="/icons/compass.png" alt="Explore Icon" width={24} height={24} />
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
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-40">
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
            <div className="relative flex items-center space-x-2">
              <Image src="/icons/star.png" alt="Hobbies Icon" width={24} height={24} />
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
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-40">
                  <Link href="/hobbies/option1">
                    <div className="block px-4 py-2 hover:bg-gray-100">Option 1</div>
                  </Link>
                  <Link href="/hobbies/option2">
                    <div className="block px-4 py-2 hover:bg-gray-100">Option 2</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Other Icons */}
            <Link href="/bookmarks" className="flex items-center">
              <Image src="/icons/bookmark.png" alt="Bookmarks Icon" width={24} height={24} />
            </Link>
            <Link href="/notifications" className="flex items-center">
              <Image src="/icons/bell.png" alt="Notifications Icon" width={24} height={24} />
            </Link>
            <Link href="/cart" className="flex items-center">
              <Image src="/icons/grocery-store.png" alt="Cart Icon" width={24} height={24} />
            </Link>

            {/* Sign In Button */}
            <Link href="/signin" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
              <span className="relative z-10">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
