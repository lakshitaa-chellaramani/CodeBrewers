'use client'
import React, { useState } from "react";
import  Link from "next/link";
const InterviewSelection = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicSelection = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((selectedTopic) => selectedTopic !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleNextButtonClick = () => {
    // Prepare data to send to the backend
    const dataToSend = {
      selectedTopics: selectedTopics
      // Add more data fields as needed
    };
    // Call your backend API to send data
    console.log("Data to send:", dataToSend);
    // Here you would typically make an API call to send data to the backend
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl heading text-center font-bold">
          Book your Interview from the below options
        </h1>
        <p className="text-lg Paras text-center mt-6">
          Select a topic for discussion
        </p>
        <div className="bg-white border mt-20 w-full rounded-2xl overflow-hidden h-auto">
          <div className="text-center Paras bg-[#f2f4f6] text-lg p-2">
            Select the schedule
          </div>
          <div className="px-8 py-6 flex flex-col">
            {["Internship Interview", "Job Interview", "Mentorship"].map((topic, index) => (
              <div key={index} className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text Paras tracking-wide">{topic}</span>
                  <input
                    type="checkbox"
                    className="checkbox ml-3"
                    onChange={() => handleTopicSelection(topic)}
                    checked={selectedTopics.includes(topic)}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/InterviewSlot"><button className="btn bg-[#21b0fe] text-white w-60" onClick={handleNextButtonClick}>
            Next
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewSelection;
