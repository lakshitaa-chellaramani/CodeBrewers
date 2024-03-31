import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <div className=" flex justify-center items-center h-screen ">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              src="/nobooking.png"
              alt="No Booking"
              className="w-48 h-48"
              width={300}
              height={300}
            />
          </div>

          <h1 className="text-3xl text-[#8d99ae] mt-6 font-bold heading text-center">
            No Booking Found
          </h1>
          <div className="flex justify-center">
          <Link href="/InterviewSelection"><button className="btn hover:bg-[#00a6ed] bg-[#9381ff] text-white w-fit mt-8">
            Create another booking
          </button></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
