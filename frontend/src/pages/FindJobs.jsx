import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { updateURL } from "../utils";
import Header from "../components/Header";
import { experience, jobTypes, jobs } from "../utils/data";
import { CustomButton, JobCard, ListBox, Loading } from "../components";
import { apiRequest } from "../utils";

const FindJobs = () => {
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordCount, setRecordCount] = useState(0);
  const [data, setData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [filterJobTypes, setFilterJobTypes] = useState([]);
  const [filterExp, setFilterExp] = useState([]);
  const [expVal, setExpVal] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState("");


  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchJobs = async() =>{
    setIsFetching(true);

    const newURL = updateURL({
      pageNum: page,
      query: searchQuery,
      keyws: searchKeywords,
      comLoc : jobLocation,
      sort: sort,
      navigate: navigate,
      location: location,
      jType: filterJobTypes,
      exp:filterExp,
    });
    try{
      const res = await apiRequest({
        url: "/jobs" + newURL,      
        method: "GET",
       });

       setNumPage(res?.numOfPage);
       setRecordCount(res?.totalJobs);
       setData(res?.data);
       setIsFetching(false);

      }catch(error){
      console.log(error);
    }
  }

  const handleSearchSubmit = async () => {
    // Reset pagination and filters for new search
    setPage(1);
    setRecordCount(0);
    setFilterJobTypes([]);
    setFilterExp([]);
    setExpVal([]);

    // Perform keyword comparison and update search query
    const keywords = extractKeywords(searchQuery);
    if (keywords.length > 0) {
      setSearchQuery(keywords.join(" ")); // Use keywords as the search query
    }

    

    // Fetch jobs with updated search query
    await fetchJobs();
  };

  // Function to extract keywords from the search query
  const extractKeywords = (query) => {
    // Implement your keyword extraction logic here
    // For example:
    return query.toLowerCase().split(/\W+/).filter((word) => word.length > 2);
  };

  const filterJobs = (val) => {
    if (filterJobTypes?.includes(val)) {
      setFilterJobTypes(filterJobTypes.filter((el) => el != val));
    } else {
      setFilterJobTypes([...filterJobTypes, val]);
    }
  };

  const filterExperience = async (e) => {
    setFilterExp(e);
  };

  useEffect(() => {
    if (expVal.length > 0){

      let newExpVal = []

      expVal?.map((el) => {
        const newEl = el?.split("-");
        newExpVal.push(Number(newEl[0]), Number(newEl[1]));
      })

      newExpVal?.sort((a, b) => a - b);

      setFilterExp('$// (newExpVal[0])-$(newExpVal[newExpVal.length - 1])')
    }
  }, [expVal]);
  useEffect(()=>{
    fetchJobs();
  },[sort, filterJobTypes, filterExp, page]);

  return (
    <div>
      <Header
        title='Find Your Dream Job with Ease'
        type='home'
        handleClick={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={jobLocation}
        setLocation={setJobLocation}
      />

      <div className='container mx-auto flex gap-6 2xl:gap-10 md:px-5 py-0 md:py-6 bg-[#f7fdfd]'>
        <div className='hidden md:flex flex-col w-1/6 h-fit bg-white shadow-sm'>
          <p className='text-lg font-semibold text-slate-600'>Filter Search</p>

          <div className='py-2'>
            <div className='flex justify-between mb-3'>
              <p className='flex items-center gap-2 font-semibold'>
                <BiBriefcaseAlt2 />
                Job Type
              </p>

              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className='flex flex-col gap-2'>
              {jobTypes.map((jtype, index) => (
                <div key={index} className='flex gap-2 text-sm md:text-base '>
                  <input
                    type='checkbox'
                    value={jtype}
                    className='w-4 h-4'
                    onChange={(e) => filterJobs(e.target.value)}
                  />
                  <span>{jtype}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='py-2 mt-4'>
            <div className='flex justify-between mb-3'>
              <p className='flex items-center gap-2 font-semibold'>
                <BsStars />
                Experience
              </p>

              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className='flex flex-col gap-2'>
              {experience.map((exp) => (
                <div key={exp.title} className='flex gap-3'>
                  <input
                    type='checkbox'
                    value={exp?.value}
                    className='w-4 h-4'
                    onChange={(e) => filterExperience(e.target.value)}
                  />
                  <span>{exp.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full md:w-5/6 px-5 md:px-0'>
          <div className='flex items-center justify-between mb-4'>
            <p className='text-sm md:text-base'>
              Shwoing: <span className='font-semibold'>{recordCount}</span> Jobs
              Available
            </p>

            <div className='flex flex-col md:flex-row gap-0 md:gap-2 md:items-center'>
              <p className='text-sm md:text-base'>Sort By:</p>

              <ListBox sort={sort} setSort={setSort} />
            </div>
          </div>

          <div className='w-full flex flex-wrap gap-4'>
            {data?.map((job, index) => {
              const newJob =  {
                name: job?.company?.name,
                logo: job?.company?.profileUrl,
                ...job,
              };
              return (
                <JobCard job={newJob} key={index} />
              );
              })}
          </div>

          {isFetching && (
            <div className = "py-10">
            <Loading/>
            </div>)}

          {numPage > page && !isFetching && (
            <div className='w-full flex items-center justify-center pt-16'>
              <CustomButton
              onClick={handleShowMore}
                title='Load More'
                containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
              />
            </div>
      
                 )}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
