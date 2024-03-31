import React from "react";
import Image from "next/image";
import Link from "next/link";
const BookingAck = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col  justify-center">
          <div className="flex justify-center">
            <Image
              src="/successful.svg"
              alt=""
              className="w-28 h-28"
              width={500}
              height={500}
            />
          </div>

          <h1 className="text-center heading text-gray-600 text-2xl">
            You have successfully booked the following session{" "}
          </h1>
          <div className="bg-zinc-50 w-full py-8 h-auto mt-8 rounded-xl">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="grid  grid-cols-5">
                  <div className="col-span-2">
                    <h1>Session Topic</h1>
                  </div>
                  <div className="col-span-3">
                    <h1 className="heading tracking-wide">
                      Web Dev Professional Guidance
                    </h1>
                  </div>
                </div>
                <div className="grid mt-4 grid-cols-5">
                  <div className="col-span-2">
                    <h1>Credit Used</h1>
                  </div>
                  <div className="col-span-3">
                    <h1 className="heading tracking-wide">15</h1>
                  </div>
                </div>
                <div className="grid mt-4 grid-cols-5">
                  <div className="col-span-2">
                    <h1>Credit Balance</h1>
                  </div>
                  <div className="col-span-3">
                    <h1 className="heading tracking-wide">45</h1>
                  </div>
                </div>
                <div className="grid mt-4 grid-cols-5">
                  <div className="col-span-2">
                    <h1>Booking Valid Till</h1>
                  </div>
                  <div className="col-span-3">
                    <h1 className="heading tracking-wide">
                      4th Apr 2024 (4 days remaining)
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/ManageBooking"><button className="btn  bg-[#21b0fe] text-white px-12 w-fit">
              Manage Booking
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAck;
