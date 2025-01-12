import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

export default function DiaryUpdates() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8 mt-[64px] ml-[250px]">
          <h1 className="text-2xl font-bold mb-4 text-center">FEEDBACKS</h1>
          <div className="bg-slate-100 p-8 shadow-md rounded-lg w-full max-w-6xl mx-auto">
            <h2 className="text-lg font-normal mb-4">If you have completed the internship,Fill this out</h2>
            <div className="mb-6">
              <label htmlFor="sc_no" className="block text-base font-medium mb-2">SC Number</label>
              <input type="text" id="date" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-base font-medium mb-2">Company</label>
              <input type="text" id="date" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-6">
              <label htmlFor="note" className="block text-base font-medium mb-2">Feedback</label>
              <textarea
                id="note"
                className="w-full p-2 border border-gray-300 rounded resize-none overflow-hidden"
                rows="4"
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              ></textarea>
            </div>
            <div className="flex justify-end mb-4">
              <button className=" py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-gray-600">Save Changes</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
