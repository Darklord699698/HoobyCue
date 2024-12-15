"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const [boxes, setBoxes] = useState<
    {
      id: number;
      title: string;
      description: string;
      icon?: string;
    }[]
  >([
    {
      id: 1,
      title: "People",
      description: "Description for People",
      icon: "/icons/user.png",
    },
    {
      id: 2,
      title: "Place",
      description: "Description for Place",
      icon: "/icons/location.png",
    },
    {
      id: 3,
      title: "Product",
      description: "Description for Product",
      icon: "/icons/product.png",
    },
    {
      id: 4,
      title: "Program",
      description: "Description for Program",
      icon: "/icons/task-list.png",
    },
  ]);

  const [editBoxId, setEditBoxId] = useState<number | null>(null);
  const [newBoxTitle, setNewBoxTitle] = useState("");
  const [newBoxDescription, setNewBoxDescription] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const addBox = () => {
    if (newBoxTitle && newBoxDescription) {
      const newBox = {
        id: boxes.length + 1,
        title: newBoxTitle,
        description: newBoxDescription,
      };
      setBoxes([...boxes, newBox]);
      setNewBoxTitle("");
      setNewBoxDescription("");
      setEditBoxId(newBox.id); // Set the newly added box for editing
    }
  };

  const handleSave = () => {
    if (editBoxId !== null && newBoxTitle && newBoxDescription) {
      setBoxes(
        boxes.map((box) =>
          box.id === editBoxId
            ? { ...box, title: newBoxTitle, description: newBoxDescription }
            : box
        )
      );
      setNewBoxTitle("");
      setNewBoxDescription("");
      setEditBoxId(null);
    }
  };

  // Simulate login when Agree and Continue is clicked
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <main className="flex min-h-screen flex-col p-0 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-8 py-16">
        <section className="w-full flex flex-col items-start px-8 lg:px-0 space-y-8 mb-16 relative">
          <h1 className="text-5xl font-bold mb-6 text-left">
            Explore Your Hobby or Passion
          </h1>
          <p className="text-xl text-gray-700">
            Dive into your hobbies or passions with our platform. Whether you're
            looking to explore
            <br />
            new interests or connect with like-minded individuals, we've got
            something for everyone.
            <br />
            Explore a world of opportunities and find what truly excites you.
          </p>
          <div className="relative w-full max-w-3xl h-auto">
            <Image
              src="/images/img1.jpg" // Ensure this is the correct path
              alt="Explore Your Hobby"
              layout="responsive"
              width={800}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </div>

          {/* Header: Sign In or User Icon */}
          <div className="absolute top-4 right-20 flex space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Image
                  src="/icons/user.png" // User icon path
                  alt="User Icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-semibold">Welcome New User </span>
              </div>
            ) : (
              <SignedOut>
                <SignInButton mode="modal" />
                <Link href="/join">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                    Join In
                  </button>
                </Link>
              </SignedOut>
            )}
          </div>

          {/* SignIn Form (Username, Password, Remember Me, etc.) */}
          <div className="absolute top-20 right-0 w-30 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border mt-8 ml-20">
            <h2 className="text-3xl font-semibold text-center mb-4">Sign In</h2>

            <div className="space-y-4">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-700">
                  Remember Me
                </label>
              </div>

              {/* Privacy Policy Link */}
              <div className="text-sm text-gray-600 mt-2">
                By signing in, you agree to our{" "}
                <Link href="/privacy-policy" className="text-blue-600">
                  Privacy Policy
                </Link>
                .
              </div>

              {/* Agree and Continue Button */}
              <button
                onClick={handleLogin}
                className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg"
              >
                Agree and Continue
              </button>
            </div>
          </div>
        </section>

        {/* Modified Box Section */}
        <section className="w-full px-8 lg:px-16 mt-16 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`p-8 border border-gray-300 rounded-lg text-center bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
                  editBoxId === box.id ? "border-blue-500" : ""
                } w-full md:w-[400px] lg:w-[500px] 
        hover:bg-purple-100 hover:border-purple-500 hover:shadow-xl hover:scale-105`}
              >
                {editBoxId === box.id ? (
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      value={newBoxTitle}
                      onChange={(e) => setNewBoxTitle(e.target.value)}
                      placeholder="Enter Box Title"
                      className="p-4 border border-gray-300 rounded-lg w-full"
                    />
                    <textarea
                      value={newBoxDescription}
                      onChange={(e) => setNewBoxDescription(e.target.value)}
                      placeholder="Enter Box Description"
                      className="p-4 border border-gray-300 rounded-lg w-full h-32"
                    />
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditBoxId(null)}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    {box.icon && (
                      <div className="flex-shrink-0">
                        <Image
                          src={box.icon}
                          alt={`${box.title} Icon`}
                          width={50}
                          height={50}
                        />
                      </div>
                    )}
                    <div className="flex-1 text-left">
                      <h2 className="text-3xl font-semibold mb-2">
                        {box.title}
                      </h2>
                      <p className="text-gray-700 text-lg">{box.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Add New Box */}
            <div className="p-8 border border-dashed border-gray-300 rounded-lg text-center bg-white shadow-lg w-full md:w-[400px] lg:w-[500px] hover:bg-green-100 hover:border-green-500 hover:shadow-xl hover:scale-105">
              <button
                onClick={() => setEditBoxId(0)} // Start a new box edit
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full mx-auto mb-4"
              >
                <span className="text-3xl">+</span>
              </button>
              <p className="text-gray-700 mb-4 text-lg">
                Click to add a new box
              </p>
              {editBoxId === 0 && (
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    value={newBoxTitle}
                    onChange={(e) => setNewBoxTitle(e.target.value)}
                    placeholder="Enter Box Title"
                    className="p-4 border border-gray-300 rounded-lg w-full"
                  />
                  <textarea
                    value={newBoxDescription}
                    onChange={(e) => setNewBoxDescription(e.target.value)}
                    placeholder="Enter Box Description"
                    className="p-4 border border-gray-300 rounded-lg w-full h-32"
                  />
                  <button
                    onClick={addBox}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    ADD NEW
                  </button>
                  <button
                    onClick={() => setEditBoxId(null)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* New Purple Box Section */}
        {/* New Purple Box Section */}
        <section className="w-full bg-purple-600 p-8 mt-16 rounded-lg flex flex-col space-y-4">
          {/* Double Quotation Symbol and Heading */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-purple-800 text-white flex items-center justify-center text-3xl">
              “
            </div>
            <p className="text-white font-bold text-lg">Testimonials</p>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center">
            <p className="text-white text-lg">
              Deadpool is a fictional antihero from Marvel Comics, known for his
              regenerative healing factor and his ability to break the fourth
              wall. Created by writer Fabian Nicieza and artist Rob Liefeld,
              Deadpool first appeared in New Mutants #98 in 1990. Often
              portrayed as irreverent and humorous, he is skilled in
              hand-to-hand combat and uses a variety of weapons. His popularity
              skyrocketed with the release of the Deadpool films, where Ryan
              Reynolds brought the character to life, combining action with
              comedic moments.
            </p>
          </div>

          {/* Audio Section */}
          <div className="flex items-center justify-center space-x-4">
            {" "}
            {/* Added space-x-4 for spacing between audio and image */}
            <audio controls className="w-1/2">
              {" "}
              {/* Audio player width set to half of the container */}
              <source src="/images/audio1.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            {/* Image in a circle */}
            {/* Image and Text Section */}
            <div className="flex items-center space-x-2">
              {/* Image in a circle */}
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/images/deadpool.png"
                  alt="Audio Icon"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text next to the image */}
              <div className="text-white">
                <p className="font-bold text-lg">Ryan Reynolds</p>
                <p className="text-sm">Actor</p>
              </div>
            </div>
          </div>
        </section>
        {/* New Section with Large Image and Text */}
        <section className="relative w-full mt-16">
          {/* Large Image */}
          <img
            src="/images/lastimage.jpg" // Replace with your image path
            alt="Large Image"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Text Overlay */}
          <div className="absolute top-4 left-4 text-black">
            <h2 className="text-3xl font-bold">Your Hobby, Your Community</h2>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 mt-10">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
