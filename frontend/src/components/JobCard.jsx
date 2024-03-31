import { GoLocation } from "react-icons/go";
import moment from "moment";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const JobCard = ({ job }) => {
  return (
    <Link to={`/job-detail/${job?.id}`}>
      {/* <Card
        className='w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[18rem] bg-white flex flex-col justify-between shadow-lg 
                rounded-md px-3 py-5 '
      >
        <div className='w-full h-full flex flex-col justify-between'>
        <div className='flex gap-3'>

          <div className='w-full h-16 flex flex-col justify-center'>
            <p className='w-full h-12 flex item-center text-lg font-semibold overflow-hidden leading-5'>{job?.jobTitle}</p>
            <span className='flex gap-2 items-center'>
              <GoLocation className='text-slate-900 text-sm' />
              {job?.location}
            </span>
          </div>
        </div>

        <div className='py-3'>
          <p className='text-sm'>
            {job?.detail[0]?.desc?.slice(0, 150) + "..."}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <p className='bg-[#1d4fd826] text-[#1d4fd8] py-0.5 px-1.5 rounded font-semibold text-sm'>
            {job?.jobType}
          </p>
          <span className='text-gray-500 text-sm'>
            {moment(job?.createdAt).fromNow()}
          </span>
        </div>
        </div>
        
      </Card> */}

      <Card
        className="w-full md:w-[16rem] 2xl:w-[18rem] h-[16rem] md:h-[20rem] bg-white flex flex-col shadow-lg 
                rounded-md px-3 py-5"
      >
        <div className="flex items-center justify-between">
          <p className="bg-blue-600 block px-3 rounded-lg text-white">
            {job?.jobType}
          </p>
          <p> {moment(job?.createdAt).fromNow()}</p>
          {/* <p className="flex gap-2 items-center">
            {" "}
            <GoLocation className="text-slate-900 text-sm" />
            {job?.location}
          </p> */}
        </div>
        <div className="text-center mt-5 mb-2 text-gray-600 text-2xl font-medium">
          {job?.jobTitle}
        </div>
        <div className="flex mt-2 items-center gap-2 flex-wrap">
          <p className="px-3 border border-blue-600 rounded-2xl">AI/ML</p>{" "}
          <p className="px-3 border border-blue-600 rounded-2xl">JAVA</p>{" "}
          <p className="px-3 border border-blue-600 rounded-2xl">PYTHON</p>
        </div>
        <div></div>
        <div className="text-center mt-3 text-md font-medium">
          {job?.detail[0]?.desc?.slice(0, 150) + "..."}
        </div>
        <Button className="bg-blue-600 mt-5"> View Job</Button>
      </Card>
    </Link>
  );
};

export default JobCard;
