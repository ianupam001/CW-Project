import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Logo from '../assets/logo.png'

const Form = () => {
  const navigate = useNavigate();
  const { details } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phoneNumber: "",
    email: "",
    className: "",
    section: "",
    school: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await details(formData)
      if(response.status===201){
        localStorage.setItem("email", formData.email);
        localStorage.setItem("phoneNumber", formData.phoneNumber);
        navigate('/dashboard')
      }else{
        console.log("Error savinbg details")
      }
    } catch (error) {
      console.error("Error saving details:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded-md p-6">
    <div className="text-center mb-6">
      <img src={Logo} alt="Logo" className="mx-auto mb-4" style={{ width: '100px' }} />
      <h2 className="text-2xl font-bold mb-2">User Details Form</h2>
    </div>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
            Father's Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your father's name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="className" className="block text-sm font-medium text-gray-700">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your class name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-4">
          <label htmlFor="section" className="block text-sm font-medium text-gray-700">
            Section
          </label>
          <input
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your section"
            required
          />
        </div>
        <div className="w-full px-3 mb-4">
          <label htmlFor="school" className="block text-sm font-medium text-gray-700">
            School
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your school name"
            required
          />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save Details
        </button>
      </div>
    </form>
  </div>
  
  );
};

export default Form;
