"use client";
// InterviewSlots.js
import React, { useState } from "react";
import InterviewModal from "./InterviewModal";
import Link from "next/link";
const InterviewSlots = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ slot: null, date: null, time: null });

  const openModal = (slot) => {
    setSelectedSlot({ ...selectedSlot, slot });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = (date, time) => {
    setSelectedSlot({ ...selectedSlot, date, time });
    setModalOpen(false);
  };

  return (
    <div className="flex h-screen p-10 items-center">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-2 p-4 overflow-hidden py-4 rounded-3xl bg-[#edf2f4]">
          <h1 className="heading text-lg px-2">How to book session</h1>
          <ul className="steps mt-6 steps-vertical">
            <li className="step Paras">Provide suitable time slots</li>
            <li className="step Paras">Receive mail on confirmation</li>
            <li className="step Paras">Join session as per the slot</li>
          </ul>
          <h1 className="heading text-lg pl-2 mt-10">What is Credit System?</h1>
          <p className="px-2 mt-4 Paras text-sm text-justify">
            Each session you book, you spend 15 credits from your account. Once
            your credit balance ends you have to recharge your account
          </p>
          <div className="grid px-2 mt-20 grid-cols-2 gap-4">
            <div className="">
              <h1 className="text-6xl font-black heading">75</h1>
              <p className="text-md Paras">Your current credit balance</p>
            </div>
            <div className="">
              <h1 className="text-6xl font-black heading">15</h1>
              <p className="text-md Paras">
                Credits required for this session
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 p-4 px-8 overflow-hidden rounded-3xl bg-[#f5f1ec]">
          <h1 className="heading text-2xl text-[#0b5351]">
            Book Web Dev Professional Guidance Session
          </h1>
          <div className="flex gap-2">
            <p className="mt-3 heading">Interview Guidance</p>
            <button
              className="btn bg-transparent shadow-none text-[#21b0fe] hover:bg-transparent hover:border-0"
              
            >
              CHANGE
            </button>
          </div>
          <p className="text-sm Paras">
            This session is FOR - Dos and Don'ts in interview and NOT FOR - Job
            assistance, resume making, etc.
          </p>
          <h1 className="mt-8 heading text-xl">
            Add Your Preferred Time Slots
          </h1>
          {[1].map((slot) => (
            <div
              key={slot}
              className="bg-[#eae6e2] p-3 px-6 w-full h-auto mt-4 rounded-2xl"
            >
              <h1 className="Paras">Time Slot {slot}</h1>
              <button
                className="btn border text-[#21b0fe] border-zinc-400 bg-transparent mt-3"
                onClick={() => openModal(slot)}
              >
                Add Date & Time Preference
              </button>
              {selectedSlot.slot === slot && (
                <div className="mt-3">
                  <p>Date: {selectedSlot.date}</p>
                  <p>Time: {selectedSlot.time}</p>
                </div>
              )}
            </div>
          ))}
          <div className="flex mt-8">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox"  className="checkbox" />
                <span className="label-text pl-4">
                  I understand that the coach will choose from above time slots
                  shared and session has to be completed as per the agreed
                  schedule.
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <Link href="/Ackno"><button className="btn bg-[#21b0fe] text-white w-60">
              Book Now
            </button></Link>
          </div>
        </div>
      </div>
      <InterviewModal isOpen={modalOpen} closeModal={closeModal} slot={selectedSlot} handleConfirm={handleConfirm} />
    </div>
  );
};

export default InterviewSlots;


