"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialMediaIcons = [
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Hobbycue Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Hobbycue</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Our Services</a></li>
              <li><a href="#work" className="hover:underline">Work with Us</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* How Do I Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">How Do I</h2>
            <ul className="space-y-2">
              <li><a href="#signup" className="hover:underline">Sign Up</a></li>
              <li><a href="#add-listing" className="hover:underline">Add a Listing</a></li>
              <li><a href="#claim" className="hover:underline">Claim Using Post</a></li>
              <li><a href="#query" className="hover:underline">Post a Query</a></li>
              <li><a href="#blog" className="hover:underline">Add a Blog Post</a></li>
              <li><a href="#other" className="hover:underline">Other Queries</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#listings" className="hover:underline">Listings</a></li>
              <li><a href="#blogposts" className="hover:underline">Blog Posts</a></li>
              <li><a href="#shop" className="hover:underline">Shop/Store</a></li>
              <li><a href="#community" className="hover:underline">Community</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col col-span-1">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <div className="flex justify-between items-center">
              {socialMediaIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="text-xl hover:text-gray-400 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            {/* Invite Friends Section */}
          <div className="flex flex-col col-span-1">
            <h2 className="text-2xl font-bold mb-4 mt-10">Invite Friends</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for friends"
                className="p-2 border border-gray-600 rounded-l-lg w-full"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
              >
                Invite
              </button>
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
