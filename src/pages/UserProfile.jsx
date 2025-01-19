import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { FaEnvelope, FaMap, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-grow p-8 overflow-y-auto mt-16 ml-[250px]">
          <h1 className="text-2xl font-bold mb-4 text-center">USER PROFILE</h1>
          <div className="bg-slate-100 p-8 shadow-md rounded-lg w-full max-w-6xl mx-auto">
            <div className="mb-6">
              <label htmlFor="address" className="block text-base font-medium mb-2">
                Address
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <FaMapMarkerAlt className="text-gray-500 ml-2" />
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border-0 ml-2"
                />
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  Email Address
                </label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaEnvelope className="text-gray-500 ml-2" />
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border-0 ml-2"
                  />
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="phone" className="block text-base font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaPhone className="text-gray-500 ml-2" />
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border-0 ml-2"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="projects" className="block text-base font-medium mb-2">
                Projects
              </label>
              
                <input
                  type="text"
                  id="projects"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
              <label htmlFor="cv1" className="block text-base font-medium mb-2">
                  CV
              </label>
              <input
                  type="text"
                  id="cv1"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-1/2 pr-2">
              <label htmlFor="cv2" className="block text-base font-medium mb-2">
                  CV
              </label>
              <input
                  type="text"
                  id="cv2"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                
                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-red-600 mr-4"
              >
                Cancel
              </button>
              <button

                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
              <label htmlFor="currentPasssword" className="block text-base font-medium mb-2">
                  Current Password
              </label>
              <input
                  type="text"
                  id="currentPassword"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-1/2 pr-2">
              <label htmlFor="cv2" className="block text-base font-medium mb-2">
                  New Password
              </label>
              <input
                  type="text"
                  id="cv2"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="projects" className="block text-base font-medium mb-2">
                Confirm Password
              </label>
              
                <input
                  type="text"
                  id="projects"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              
            </div>
            <div className="flex justify-end">
              <button
                
                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-red-600 mr-4"
              >
                Cancel
              </button>
              <button

                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
