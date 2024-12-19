import React, { useState } from 'react';
import { MdErrorOutline } from "react-icons/md";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    focusInput: '',
    normalText1: '',
    autoCompleteText: '',
    isActive: false,
    date: '',
    normalText2: '',
    normalTextWithInfo: '',
    number: 0,
    email: "",
    Active: "",
    Normal: ""
  });

  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const autoCompleteOptions = ['UI Design', 'UX Patterns', 'Daily UI', 'Frontend Development'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Autocomplete logic for the "autoCompleteText" field
    if (name === 'autoCompleteText') {
      const filteredSuggestions = autoCompleteOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (value) => {
    setFormData({
      ...formData,
      autoCompleteText: value,
    });
    setSuggestions([]);
  };

  const handleNumberChange = (e) => {
    const { value } = e.target;
    if (value >= 0) {
      setFormData({ ...formData, number: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (formData.password && formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
    if (!formData.autoCompleteText) tempErrors.autoCompleteText = 'This field is required';
    if (!formData.date) tempErrors.date = 'Date is required';
    if (formData.number < 0) tempErrors.number = 'Number must be a positive value';
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.Normal) tempErrors.Normal = 'This field is required';

    setErrors(tempErrors);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto p-5 lg:p-44 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* First Column */}
        <div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-500 p-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter your first name"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.firstName && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.firstName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="focusInput" className="block text-sm font-semibold text-gray-500 p-2">Focus Input</label>
            <input
              type="text"
              id="focusInput"
              name="focusInput"
              value={formData.focusInput}
              placeholder="Focus input"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 focus:border-blue-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Active" className="block text-sm font-semibold text-gray-500 p-2">Active</label>
            <input
              type="text"
              id="Active"
              name="autoCompleteText"
              value={formData.autoCompleteText}
              placeholder="Active status"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.Active && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.Active}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="Normal" className="block text-sm font-semibold text-gray-500 p-2">Normal</label>
            <input
              type="text"
              id="Normal"
              name="Normal"
              value={formData.Normal}
              placeholder="Normal text"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.Normal && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.Normal}
              </p>
            )}
          </div>
        </div>

        {/* Second Column */}
        <div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-500 p-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter your last name"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.lastName && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.lastName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-500 p-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-semibold text-gray-500 p-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.date}
              </p>
            )}
          </div>

          {/* Increment / Decrement Input with buttons inside */}
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-semibold text-gray-500 p-2">Number</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, number: Math.max(0, formData.number - 1) })}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 font-bold bg-gray-300 rounded-l-md hover:outline-none hover:ring-2 hover:ring-blue-500"
              >
                -
              </button>
              <input
                type="number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleNumberChange}
                className="w-full p-2 pl-10 pr-10 border rounded hover:outline-none hover:ring-2 hover:ring-blue-500 text-center"
              />
              <button
                type="button"
                onClick={() => setFormData({ ...formData, number: formData.number + 1 })}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 font-bold rounded-r-md hover:outline-none hover:ring-2 hover:ring-blue-500"
              >
                +
              </button>
            </div>
            {errors.number && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.number}
              </p>
            )}
          </div>
        </div>

        {/* Third Column */}
        <div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-500 p-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-400 flex items-center px-2 font-bold text-xs mt-1">
                <MdErrorOutline className="m-1 text-xl" />{errors.password}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="autoCompleteText" className="block text-sm font-semibold text-gray-500 p-2">Auto Complete</label>
            <input
              type="text"
              id="autoCompleteText"
              name="autoCompleteText"
              value={formData.autoCompleteText}
              onChange={handleInputChange}
              placeholder="Start typing..."
              className="w-full p-2 border border-gray-500 rounded hover:outline-none hover:ring-2 hover:ring-blue-500"
            />
            {suggestions.length > 0 && (
              <div className="mt-2 bg-white border border-gray-300 rounded shadow-lg absolute z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
