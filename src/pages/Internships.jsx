"use client";

import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

const InternshipPage = () => {
  const [internships, setInternships] = useState([]);
  const [searchCompany, setSearchCompany] = useState('');
  const [searchDesignation, setSearchDesignation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/internships');
      const data = await response.json();
      setInternships(data);
    };
    fetchData();
  }, []);

  const filteredInternships = internships.filter(internship => 
    internship.company.toLowerCase().includes(searchCompany.toLowerCase()) &&
    internship.designation.toLowerCase().includes(searchDesignation.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8 mt-[64px] ml-[250px]">
          <h1 className="text-2xl font-bold mb-4 text-center">Internships</h1>
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Company:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <FaSearch className="text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search by Company" 
                  value={searchCompany} 
                  onChange={(e) => setSearchCompany(e.target.value)}
                  className="flex-1 p-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Designation:</span>
              <div className="flex items-center border border-gray-300 rounded px-2">
                <FaSearch className="text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search by Designation" 
                  value={searchDesignation} 
                  onChange={(e) => setSearchDesignation(e.target.value)}
                  className="flex-1 p-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <table className="w-full border border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-center bg-gray-200">Company</th>
                <th className="border p-2 text-center bg-gray-200">Designation</th>
                <th className="border p-2 text-center bg-gray-200">Time period</th>
              </tr>
            </thead>
            <tbody>
              {filteredInternships.map((internship, index) => (
                <tr key={index}>
                  <td className="border p-2">{internship.company}</td>
                  <td className="border p-2">{internship.designation}</td>
                  <td className="border p-2">{internship.timePeriod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
