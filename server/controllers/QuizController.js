import { GoogleGenerativeAI } from "@google/generative-ai";
import AiQuiz from "../models/Quiz.js";

const quizController = async (req, res) => {
  try {
    const { lang, selectedAmount: amount } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const format = `
        [
          {
            "question": "___ team won the cricket world cup 2023.",
            "answer": " Australia"
          },
          {
            "question": "The ___ is used to set the width of an element in CSS.",
            "answer": "vw"
          },
          {
            "question": "___ CSS property is used to set the background color of an element",
            "answer": "19"
          },
          {
            "question": "Virat Kohli holds the record for the most number of runs in an ipl season that is ___.",
            "answer": "973"
          },
        ]
        `;
    const prompt = `Generate ${amount} fill in the blanks question on ${lang} programming language.
        Give the output in the following format ${format}.There should be both the question and answer.This format is just example...dont use this in any questions. The difficulty level of all the questions should be very hard
        If the topic is gibberish or you dont understand it dont create quiz on any other topic...
        Use just three continous underscores that is ___ for blanks..All questions must have atleast one and maximum also only one such blank. The output should be just array of questions. Dont add anything before or after it.
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const questionsAndAnswers = JSON.parse(text);
    const saveQuiz = await AiQuiz.create({
      topic: lang,
      questionsAndAnswers: questionsAndAnswers,
    });
    return res.status(200).json({ saveQuiz, msg: "Quiz created successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"Error in quiz controller"})
  }
};

const getQuizDetails = async (req, res) => {
  const quizId = req.params.quizId;
  try {
    const response = await AiQuiz.findById(quizId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message:"Error while getting Quiz Details"})
  }
};

const submitQuiz = async (req, res) => {
  const { quizId, answers, similarityPercentage, answerTime } = req.body;
  try {
    const response = await AiQuiz.findByIdAndUpdate(
      quizId,
      {
        userAnswers: answers,
        similarityPercentage : similarityPercentage,
        timeTaken: answerTime,
      },
      { new: true }
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({message:"Error while submitting quiz.."})
  }
};

export { quizController, getQuizDetails, submitQuiz };
