import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

export default function CurrentStatus() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col mt-[64px] ml-[250px] p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Current Status</h1>
            <div className="flex flex-1 items-center justify-center">
              <div className="bg-slate-100 p-8 shadow-md rounded-lg w-full max-w-md mx-auto">
                <h3 className="text-lg font-medium mb-4 text-center">Where are you Now</h3>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="Call_Interview"
                  />
                  <label htmlFor="call" className="ml-2">Call the interview</label>
                </div>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="Faced"
                  />
                  <label htmlFor="Faced" className="ml-2">Faced the interview</label>
                </div>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="selected"
                    onChange={() => handleNavigate('/About')}
                  />
                  <label htmlFor="selected" className="ml-2">Selected</label>
                </div>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="intern"
                    onChange={() => handleNavigate('/Dairy')}
                  />
                  <label htmlFor="intern" className="ml-2">Intern</label>
                </div>
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="completeIntern"
                    onChange={() => handleNavigate('/Feedback')}
                  />
                  <label htmlFor="completeIntern" className="ml-2">Complete Intern</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
