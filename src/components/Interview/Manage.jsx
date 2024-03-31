import React from "react";
import Link from "next/link";
const Manage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="grid p-4 grid-cols-3 gap-4">
        <Link href="/InterviewSelection"><button className="bg-[#edf2f4] heading text-lg btn w-full rounded-3xl h-40">New Booking</button></Link>
        <Link href="/ManageBooking"><button className="bg-[#edf2f4] heading text-lg btn w-full rounded-3xl h-40">Manage Booking</button></Link>
        <Link href="/PreviousBooking"><button className="bg-[#edf2f4] heading text-lg btn w-full rounded-3xl h-40">Previous Booking</button></Link>
      </div>
    </div>
  );
};

export default Manage;
