import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { LoaderIcon, TimerIcon } from "lucide-react";
import { compareTwoStrings } from "string-similarity";
import { Button } from "./ui/button";

const PlayQuiz = () => {
  const params = useParams();
  const quizId = params.quizId;
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  let emptyArray = Array.from(
    { length: questionsAndAnswers?.length },
    () => ""
  );
  const [questionNo, setQuestionNo] = useState(1);
  const [answers, setAnswers] = useState(emptyArray);
  const [answerTime, setAnswerTime] = useState(emptyArray);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [loading]);

  const handlePrev = () => {
    if (questionNo === 1) {
      console.log("This is the start of the quiz");
    } else {
      setQuestionNo(questionNo - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const correctAnswers = questionsAndAnswers?.map((item) => item.answer);
      let totalSimilarity = correctAnswers?.reduce((total, item, index) => {
        let similarity = compareTwoStrings(item, answers[index]);
        return total + similarity;
      }, 0);

      totalSimilarity = (totalSimilarity / questionsAndAnswers?.length) * 100;
      let roundedNumber = totalSimilarity.toFixed(2);

      const response = await axios.put(`http://localhost:8001/submitQuiz`, {
        quizId,
        answers,
        similarityPercentage: roundedNumber,
        answerTime,
      });
      navigate(`/results/${quizId}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleNext = async () => {
    if (questionNo === questionsAndAnswers?.length) {
      setAnswerTime((prevAnswerTime) => {
        const updatedAnswerTime = [...prevAnswerTime];
        updatedAnswerTime[questionNo - 1] = timer;
        return updatedAnswerTime;
      });
      handleSubmit();
    } else {
      setAnswerTime((prevAnswerTime) => {
        const updatedAnswerTime = [...prevAnswerTime];
        updatedAnswerTime[questionNo - 1] = timer;
        return updatedAnswerTime;
      });
      setQuestionNo(questionNo + 1);
    }
  };

  const handleInputChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionNo - 1] = e.target.value;
    setAnswers(updatedAnswers);
  };
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

  useEffect(() => {
    const getAiQuiz = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8001/getQuizDetails/${quizId}`
        );
        setQuestionsAndAnswers(response.data.questionsAndAnswers);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getAiQuiz();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-w-[50%] max-w-[50%] mx-auto h-[90vh]">
        <Card className="w-full">
          <CardHeader>
            <div>
              <div className="flex justify-between w-full items-stretch">
                <h1 className="bg-[white] font-medium py-2 px-5 text-black inline-block rounded-[5px] ">
                  Question {questionNo} / {questionsAndAnswers?.length}
                </h1>
                <div className="bg-[white] flex items-center justify-center gap-2 rounded-[5px] py-2 text-black px-5">
                  <TimerIcon />
                  {formatTime(timer)}
                </div>
              </div>
              <h1 className="pt-4 font-medium leading-[50px] text-3xl tracking-wide">
                {questionsAndAnswers[questionNo - 1]?.question
                  .split("___")
                  .map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index !==
                        questionsAndAnswers[questionNo - 1]?.question.split(
                          "___"
                        ).length -
                          1 && (
                        <input
                          type="text"
                          value={answers[questionNo - 1]}
                          onChange={(e) => handleInputChange(e)}
                          className=" rounded-md font-medium text-[black] max-h-[40px] py-[2px] px-2 w-[200px] border border-black focus:muted-foreground"
                        />
                      )}
                    </React.Fragment>
                  ))}
              </h1>
            </div>
          </CardHeader>
          <CardFooter className="flex items-center justify-between mb-5">
            <Button
              disabled={questionNo === 1 ? true : false}
              onClick={() => handlePrev()}
              className={` ${
                questionNo === 1 ? "text-black" : "text-white"
              } border border-slate-800 disabled:bg-muted disabled:cursor-default disabled:scale-[1] cursor-pointer active:scale-[0.97] transition duration-300 ease w-[120px] text-center text-md tracking-wide font-medium py-2 px-5  inline-block rounded-[5px] `}
            >
              Previous
            </Button>
            {!loading ? (
              <>
                {questionNo === questionsAndAnswers?.length ? (
                  <Button
                    onClick={() => handleNext()}
                    className="text-white cursor-pointer active:scale-[0.97] transition duration-300 ease w-[120px] text-center text-md tracking-wide font-medium py-2 px-5 inline-block rounded-[5px] "
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleNext()}
                    className=" cursor-pointer active:scale-[0.97] transition duration-300 ease w-[120px] text-center text-md tracking-wide font-medium py-2 px-5 text-white inline-block rounded-[5px] "
                  >
                    Next
                  </Button>
                )}
              </>
            ) : (
              <>
                <button
                  disabled={true}
                  className="bg-[white] flex items-center justify-center gap-2 disabled:bg-muted disabled:cursor-default disabled:scale-[1] cursor-pointer active:scale-[0.97] transition duration-300 ease text-center text-md tracking-wide font-medium py-2 px-5 text-black rounded-[5px] "
                >
                  <LoaderIcon className="w-[50px] mr-[10px]" />
                  <p>Submitting Quiz...</p>
                </button>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default PlayQuiz;
