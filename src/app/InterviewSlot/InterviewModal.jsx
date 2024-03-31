'use client'
// InterviewModal.js
import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, closeModal, slot, handleConfirm }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (slot.date && slot.time) {
      setSelectedDate(slot.date);
      setSelectedTime(slot.time);
    }
  }, [slot]);

  const getDayName = (date) => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(date).getDay();
    return dayNames[dayIndex];
  };

  useEffect(() => {
    if (selectedDate) {
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const availableTimesArray = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"];
      setAvailableTimes(availableTimesArray);
    }
  }, [selectedDate]);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const isConfirmDisabled = !selectedDate || !selectedTime;

  return (
    isOpen && (
      <div className="fixed inset-0 z-20 bg-transparent backdrop-blur bg-opacity-50 flex items-center justify-center">
        <div className="bg-white max-w-5xl mx-auto w-full p-8 rounded-2xl">
          <h1 className="text-xl text-center heading font-bold mb-4">Select Date and Time</h1>
          <p className="Paras text-center">
            Please select at least one weekend slot (Saturday or Sunday)
          </p>
          <div>
            <div className="mt-4 overflow-hidden rounded-xl h-28">
              <div className="grid grid-cols-7 gap-2">
                {[...Array(7)].map((_, index) => {
                  const currentDate = new Date();
                  currentDate.setDate(currentDate.getDate() + index + 1); // Start from the next day
                  const date = currentDate.getDate();
                  const dayName = getDayName(currentDate);
                  const month = currentDate.toLocaleString("en-US", { month: "short" });
                  const formattedDate = `${date} ${month} ${currentDate.getFullYear()}`;
                  return (
                    <button
                      key={index}
                      className={`bg-[#f2f4f6] btn w-full flex flex-col justify-center items-center h-28 ${
                        selectedDate === formattedDate ? "bg-[#9381ff] text-white" : ""
                      }`}
                      onClick={() => handleDateSelection(formattedDate)}
                    >
                      <h1 className="text-4xl font-black heading">{date}</h1>
                      <p className="text-sm Paras">{dayName}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-[#f2f4f6] w-full h-auto mt-5 p-4 rounded-2xl">
            <div className="flex flex-col px-20 justify-center">
              {availableTimes.map((time, index) => (
                <div
                  key={index}
                  className={`form-control border-b border-slate-200 ${
                    selectedTime === time ? " text-white" : ""
                  }`}
                  onClick={() => handleTimeSelection(time)}
                >
                  <label className="label cursor-pointer">
                    <span className="label-text mr-3 Paras">{time}</span>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className={`btn mt-6 bg-[#21b0fe] text-white ${isConfirmDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => handleConfirm(selectedDate, selectedTime)}
              disabled={isConfirmDisabled}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;



