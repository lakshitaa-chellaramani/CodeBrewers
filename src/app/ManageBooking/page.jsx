import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookingSession = ({ date, startTime, endTime }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        1
      </th>
      <td className="px-6 flex items-center py-4">
        <Image
          src="/calender.svg"
          className="w-6 h-6 mr-3"
          width={20}
          height={20}
          alt="Calendar"
        />
        {date}
      </td>
      <td className="px-6 py-4">{startTime}</td>
      <td className="px-6 py-4">{endTime}</td>
    </tr>
  );
};

const Page = () => {
  return (
    <div className="max-w-7xl flex flex-col justify-center items-center h-screen mx-auto">
      <div className="bg-[#f2f4f6] rounded-xl w-full h-auto py-6">
        <div className="flex p-6 border-b justify-center">
          <ul className="steps">
            {[
              "Session Created",
              "Time Preference Added",
              "Accepted By Coach",
              "Session Conducted",
              "Feedback Submitted",
              "Approved By Admin",
              "Completed",
            ].map((step, index) => (
              <li
                key={index}
                className={`step text-sm Paras ${
                  index < 2 ? "step-primary" : ""
                } ${index === 2 ? "step-primary" : ""}`}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <h1 className="text-xl font-black heading">
                Web Dev Professional Guidance - Interview Guidance
              </h1>
            </div>
            <div className="col-span-2 gap-6 flex">
              <div className=" text-sm  flex items-center Paras px-4 bg-transparent text-[#9381ff] border border-[#9381ff] rounded-2xl">
                <Image
                  src="/student.svg"
                  className="w-4 h-4 mr-1"
                  width={20}
                  height={20}
                  alt="Student"
                />
                Student Booking
              </div>
              <div className=" text-sm flex items-center Paras px-4 bg-transparent text-[#21b0fe] border border-[#21b0fe] rounded-2xl">
                <Image
                  src="/active.svg"
                  className="w-4 h-4 mr-1"
                  width={20}
                  height={20}
                  alt="Active"
                />
                Active
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <h1 className="text-sm Paras">Your Preferred Slots</h1>
        </div>
        <div className="px-6 mt-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-3xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <BookingSession
                  date="30th March 2024"
                  startTime="04:00 PM"
                  endTime="05:00 PM"
                />
                <BookingSession
                  date="30th March 2024"
                  startTime="04:00 PM"
                  endTime="05:00 PM"
                />
                <BookingSession
                  date="30th March 2024"
                  startTime="04:00 PM"
                  endTime="05:00 PM"
                />
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex px-6 gap-6 justify-end">
          <div>
            
              <button className="btn hover:bg-transparent bg-transparent border border-[#fe4a49] text-[#fe4a49] w-40 mt-8">
                Cancel Session
              </button>
          
          </div>
          <div>
            <button className="btn hover:bg-[#00a6ed] bg-[#21b0fe] text-white w-40 mt-8">
              Start Session
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6 justify-center">
        <Link href="/InterviewSelection">
          <button className="btn hover:bg-[#00a6ed] bg-[#9381ff] text-white w-fit mt-8">
            Create another booking
          </button>
        </Link>
        <Link href="/NoBooking">
          <button className="btn hover:bg-[#2b2d42] bg-[#2b2d42] text-white w-fit mt-8">
            If No Booking?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
