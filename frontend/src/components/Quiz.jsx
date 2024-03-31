import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Quiz = () => {
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const generateQuiz = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8001/generateQuiz", {
        lang: lang,
        selectedAmount: 5,
      });
      navigate(`/playQuiz/${response.data.saveQuiz._id}`);
      setLoading(false);
      toast.success("Quiz Created Successfully")
    } catch (error) {
      console.log(error)
      setLoading(false);
      toast.error("Error while creating Quiz")
    }
  };

  return (
    <>
      <div className="max-w-[85%] mx-auto flex gap-10 items-center justify-between h-[90vh]">
        <div className="max-w-[50%]">
          <h1 className="text-6xl font-bold text-left tracking-wide">
            Choose a topic you would like to play quiz on...
          </h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur voluptatum at sequi delectus dicta explicabo error
            reiciendis inventore corrupti officiis.
          </p>

          <Button
          disabled={loading}
            className="mt-2 w-[200px] py-6"
            onClick={() => generateQuiz()}
          >
            {loading ? "loading..." : "Start Quiz"}
          </Button>
        </div>

        <div className="flex w-[45%] gap-[20px] items-center justify-center flex-wrap">
          <Button
            className={` ${
              lang === "Javascript" ? "bg-blue-800" : ""
            } flex cursor-pointer hover:border hover:bg-blue-800 hover:border-white
            hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease
            w-[30%] h-[200px] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("Javascript")}
          >
            <img src="./javascript.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">Javascript</h1>
          </Button>
          <Button
            className={` ${
              lang === "Python" ? "bg-blue-800" : ""
            } flex h-[200px] cursor-pointer hover:border hover:bg-blue-800 hover:border-white hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease w-[30%] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("Python")}
          >
             <img src="./python.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">Python</h1>
          </Button>
          <Button
            className={`flex ${
              lang === "Java" ? "bg-blue-800" : ""
            } cursor-pointer h-[200px] hover:border hover:bg-blue-800 hover:border-white hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease w-[30%] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("Java")}
          >
            <img src="./java.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">Java</h1>
          </Button>
          <Button
            className={`${
              lang === "C++" ? "bg-blue-800" : ""
            } flex cursor-pointer h-[200px] hover:border hover:bg-blue-800 hover:border-white hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease w-[30%] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("C++")}
          >
            <img src="./c++.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">C++</h1>
          </Button>
          <Button
            className={` ${
              lang === "Rust" ? "bg-blue-800" : ""
            } flex cursor-pointer h-[200px] hover:border hover:bg-blue-800 hover:border-white hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease w-[30%] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("Rust")}
          >
            <img src="./rust.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">Rust</h1>
          </Button>
          <Button
            className={` ${
              lang === "CProgramming" ? "bg-blue-800" : ""
            }  flex cursor-pointer h-[200px] hover:border hover:bg-blue-800 hover:border-white hover:scale-[1.02] active:scale-[0.97] transition duration-200 ease w-[30%] p-10 items-center justify-center flex-col`}
            onClick={() => setLang("CProgramming")}
          >
            <img src="./c.png" width={70} className="mb-3" alt="" />
            <h1 className="text-2xl font-medium">C</h1>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
