import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";


const UserProfile = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-grow p-8 overflow-y-auto mt-16 ml-[250px]">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            
          </div>
        </div>
    </div>
  );
};

export default UserProfile;
