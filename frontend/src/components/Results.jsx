import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { differenceInSeconds } from "date-fns";
import { compareTwoStrings } from "string-similarity";
import axios from 'axios'
import { Card } from './ui/card';
import { TimerIcon } from 'lucide-react';
import {AllCourses} from "@/lib/courses"

const Results = () => {

    const params = useParams()
    const quizId = params.quizId

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getAiQuiz = async () => {
          try {
            setLoading(true);
            const response = await axios.get(
              `http://localhost:8001/getQuizDetails/${quizId}`
            );
            setData(response.data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error)
          }
        };
    
        getAiQuiz();
      }, []);

      let imageUrl;

  if (data?.similarityPercentage >= 80 && data?.similarityPercentage <= 100) {
    imageUrl = "/gifs/80_100.gif";
  } else if (
    data?.similarityPercentage >= 60 &&
    data?.similarityPercentage < 80
  ) {
    imageUrl = "/gifs/60_80.gif";
  } else if (
    data?.similarityPercentage >= 40 &&
    data?.similarityPercentage < 60
  ) {
    imageUrl = "/gifs/40_60.gif";
  } else if (
    data?.similarityPercentage >= 20 &&
    data?.similarityPercentage < 40
  ) {
    imageUrl = "/gifs/20_40.gif";
  } else {
    imageUrl = "/gifs/0_20.gif";
  }

  const final = differenceInSeconds(data?.updatedAt, data?.createdAt);
  const lastTime =
    final - data?.timeTaken[data?.questionsAndAnswers.length - 2];

  function formatTime(seconds) {
    if (seconds < 60) {
      return `${seconds}s`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      if (minutes === 0 && remainingSeconds === 0) {
        return `${hours}h`;
      } else if (minutes === 0) {
        return `${hours}h ${remainingSeconds}s`;
      } else if (remainingSeconds === 0) {
        return `${hours}h ${minutes}m`;
      } else {
        return `${hours}h ${minutes}m ${remainingSeconds}s`;
      }
    }
  }



  let myCourses = AllCourses?.filter((item)=>item.name === data?.topic)
  console.log(myCourses)

  if(data?.similarityPercentage < 50){
    myCourses = myCourses?.filter((item)=>item.difficulty==="BeginnerIntermediate")
  }else{
    myCourses = myCourses?.filter((item)=>item.difficulty==="Advanced")
  }

  console.log(myCourses)

  return (
    <div className="flex items-center justify-center w-[80%] mt-[60px] mx-auto">
    <div className="w-full">
      <h1 className="text-4xl font-bold tracking-wide">Summary</h1>
      <div className="flex items-stretch justify-between space-x-10">
        <Card className="my-5 p-10 w-[50%] mx-auto">
          <img
            src={imageUrl}
            alt="gif"
            className={`mx-auto ${
              data?.similarityPercentage >= 80
                ? "w-[200px] h-[200px]"
                : "w-[200px] h-[200px]"
            }`}
            width={200}
            height={200}
          />
          <h1 className="text-4xl max-w-[75%] pt-5 mx-auto font-bold tracking-wide leading-[40px] text-center">
            Accuracy : {data?.similarityPercentage}%
          </h1>
          <p className="text-muted-foreground text-sm text-center ">
            The average accuracy of your answers were{" "}
            {data?.similarityPercentage}%
          </p>
        </Card>
        <Card className="my-5 flex items-center gap-0 justify-center flex-col w-[50%]">
          <TimerIcon className="w-[180px] h-[180px]" />
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-5 mx-auto font-bold tracking-wide text-center">
              Time Taken : {formatTime(final)}
            </h1>
            <p className="text-muted-foreground text-sm text-center">
              You took a total of {formatTime(final)} to complete the
              quiz...
            </p>
          </div>
        </Card>
      </div>
      <div>
        <h1 className="font-bold text-3xl tracking-wide mb-5 pt-8">
          Questions and Answers
        </h1>
        <div className="flex items-start justify-center flex-col mb-[50px] gap-[20px]">
          {data?.questionsAndAnswers?.map((item, index) => {
            const similarity = compareTwoStrings(
              item?.answer,
              data?.userAnswers[index]
            );
            const percSimilarity = (similarity * 100).toFixed(2);

            return (
              <div
              key={index}
                className="border flex items-center justify-between border-muted p-5 w-full rounded-[10px]
               hover:border hover:border-muted-foreground hover:bg-muted cursor-pointer transition duration-300 ease"
              >
                <div className="w-[75%] ">
                  <h1 className="text-xl font-medium traking-wide">
                    {item?.question}
                  </h1>
                  <h1 className="text-muted-foreground text-md">
                    Correct Answer :{item?.answer}
                  </h1>
                  <h1 className="text-muted-foreground text-md">
                    Your Answer: {data?.userAnswers[index]}
                  </h1>
                </div>
                <div className="flex items-center justify-center w-[12%] flex-col">
                  <p className="text-muted-foreground">Accuracy</p>
                  <p className="text-3xl font-bold ">{percSimilarity}%</p>
                </div>
                <div className="flex items-center justify-center w-[13%] flex-col">
                  <p className="text-muted-foreground">Time Taken</p>
                  {index === data.questionsAndAnswers.length - 1 ? (
                    <p className="text-3xl font-bold ">{formatTime(lastTime)}</p>
                  ) : (
                    <p className="text-3xl font-bold ">
                      {data?.timeTaken[index - 1]
                        ? formatTime(
                            data?.timeTaken[index] -
                              data?.timeTaken[index - 1]
                          )
                        : formatTime(data?.timeTaken[index])}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>


        <div className='mb-[200px]'>
        <h1 className="font-bold text-3xl tracking-wide mb-5 pt-8">
           Recommended Courses for you...
        </h1>
        <div className='flex items-center  justify-between gap-10'>
          {myCourses[0]?.courses?.map((item)=>{
            return(
                <>
                 <iframe
                  src={item?.ytLink}
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                  title='video'
                  className='w-[500px] h-[240px]'
                />

                </>
            )
          })}
          </div>
          

        </div>

    </div>
  </div>
  )
}

export default Results