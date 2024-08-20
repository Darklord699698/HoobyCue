"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [boxes, setBoxes] = useState<
    { id: number; title: string; description: string; icon?: string }[]
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
    if (editBoxId !== null) {
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

  return (
    <main className="flex min-h-screen flex-col p-0 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-8 py-16">
        {/* Explore Your Hobby Section */}
        <section className="w-full flex flex-col items-start px-8 lg:px-0 space-y-8 mb-16">
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
        </section>

        {/* Box Section */}
        <section className="w-full px-8 lg:px-16 mt-16 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`p-8 border border-gray-300 rounded-lg text-center bg-white shadow-lg ${
                  editBoxId === box.id ? "border-blue-500" : ""
                } w-full md:w-[400px] lg:w-[500px]`}
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
            <div className="p-8 border border-dashed border-gray-300 rounded-lg text-center bg-white shadow-lg w-full md:w-[400px] lg:w-[500px]">
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
      </div>
    </main>
  );
}
