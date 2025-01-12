import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';

export default function AboutInternship() {
  const [scNumber, setScNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [appointmentLetter, setAppointmentLetter] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [supervisorName, setSupervisorName] = useState('');

  const handleClearForm = () => {
    setScNumber('');
    setEmail('');
    setPhone('');
    setCompany('');
    setDesignation('');
    setAppointmentLetter(null);
    setStartDate(null);
    setEndDate(null);
    setSupervisorName('');
  };

  const handleSaveChanges = () => {
    const formData = {
      scNumber,
      email,
      phone,
      company,
      designation,
      appointmentLetter,
      startDate,
      endDate,
      supervisorName,
    };
    
    // Replace with your actual database saving logic
    console.log('Form data saved:', formData);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-8 mt-[64px] ml-[250px]">
          <h1 className="text-2xl font-bold mb-4 text-center">ABOUT YOUR INTERNSHIPS</h1>
          <div className="bg-slate-100 p-8 shadow-md rounded-lg w-full max-w-4xl mx-auto">
            <div className="mb-6">
              <label htmlFor="scNumber" className="block text-base font-medium mb-2">SC Number</label>
              <input
                type="text"
                id="scNumber"
                value={scNumber}
                onChange={(e) => setScNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <label htmlFor="email" className="block text-base font-medium mb-2">Email Address</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaEnvelope className="text-gray-500 ml-2" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border-0 ml-2"
                  />
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="phone" className="block text-base font-medium mb-2">Phone Number</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaPhone className="text-gray-500 ml-2" />
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border-0 ml-2"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="block text-base font-medium mb-2">Company</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="designation" className="block text-base font-medium mb-2">Designation</label>
              <input
                type="text"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="appointmentLetter" className="block text-base font-medium mb-2">Appointment Letter</label>
              <input
                type="file"
                id="appointmentLetter"
                onChange={(e) => setAppointmentLetter(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex mb-6">
              <div className="w-1/2 pr-2">
                <label htmlFor="startDate" className="block text-base font-medium mb-2">Start Date</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaCalendarAlt className="text-gray-500 ml-2" />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full p-2 border-0 ml-2"
                    placeholderText="Select start date"
                  />
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="endDate" className="block text-base font-medium mb-2">End Date</label>
                <div className="flex items-center border border-gray-300 rounded">
                  <FaCalendarAlt className="text-gray-500 ml-2" />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="w-full p-2 border-0 ml-2"
                    placeholderText="Select end date"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="supervisorName" className="block text-base font-medium mb-2">Supervisor Name</label>
              <input
                type="text"
                id="supervisorName"
                value={supervisorName}
                onChange={(e) => setSupervisorName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleClearForm}
                className="py-2 px-4 bg-[#0F1D2F] text-white rounded hover:bg-red-600 mr-4"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
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
}
