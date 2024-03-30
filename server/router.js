import express from "express";
import { getQuizDetails, quizController, submitQuiz } from "./controllers/QuizController.js";

const router = express.Router()

router.post("/generateQuiz",quizController)
router.get("/getQuizDetails/:quizId",getQuizDetails)
router.put("/submitQuiz",submitQuiz)



export  {router}