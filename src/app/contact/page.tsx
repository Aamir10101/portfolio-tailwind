import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300 p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Me</h2>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
              placeholder="Type your message here" rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Information */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Direct Contact</h3>
          <p className="text-gray-600">Email: amiransari10101@gmail.com</p>
          <p className="text-gray-600">Phone: 03453494644</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex space-x-4 justify-center ">
          <a href="https://www.linkedin.com/in/amir-iqbal-703170235" className="text-gray-800 hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com/Aamir10101" className="text-gray-800 hover:text-blue-600">GitHub</a>

        </div>
      </div>
    </div>
  );
}
