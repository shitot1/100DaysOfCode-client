import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React, { useReducer } from 'react';
import Progress from './functions/Progress';
import Question from './functions/Question';
import Answers from './functions/Answers';
import QuizContext from './context/quizContext';
import {
    SET_CURRENT_ANSWER,
    SET_CURRENT_QUESTION,
    SET_ANSWERS,
    SET_SHOW_RESULTS,
    SET_ERROR,
    RESET_QUIZ
} from "./Reducers/types"
import quizReducer from './Reducers/QuizReducer'
import './Trivia.css';



function PracticeGame() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([1]);
    const cardNumber = localStorage.getItem('card');
    useEffect(() => {
        fetch('https://meadaysofcode.herokuapp.com/api/questions')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setQuestions(data);
                if (cardNumber == 1) setQuestions(prevState => prevState.filter(data => data.id > 0 && data.id <= 5));
                if (cardNumber == 2) setQuestions(prevState => prevState.filter(data => data.id > 5 && data.id <= 10));
                if (cardNumber == 3) setQuestions(prevState => prevState.filter(data => data.id > 10 && data.id <= 15));
                if (cardNumber == 4) setQuestions(prevState => prevState.filter(data => data.id > 15 && data.id <= 20));
                if (cardNumber == 5) setQuestions(prevState => prevState.filter(data => data.id > 20 && data.id <= 25));
                if (cardNumber == 6) setQuestions(prevState => prevState.filter(data => data.id > 25 && data.id <= 30));
                if (cardNumber == 7) setQuestions(prevState => prevState.filter(data => data.id > 30 && data.id <= 35));
                if (cardNumber == 8) setQuestions(prevState => prevState.filter(data => data.id > 35 && data.id <= 40));
                if (cardNumber == 9) setQuestions(prevState => prevState.filter(data => data.id > 40 && data.id <= 45));
            })
    }, []);

    const initialState = {
        questions,
        currentQuestion: 0,
        currentAnswer: '',
        answers: [],
        showResults: false,
        error: ''
    }

    const [state, dispatch] = useReducer(quizReducer, initialState)
    const { currentQuestion, currentAnswer, answers, showResults, error } = state;



    const question = questions[currentQuestion];
    const renderError = () => {
        if (!error) {
            return;
        }

        return <div className='error'>{error}</div>
    }

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className='correct'>Correct</span>;
        }

        return <span className='failed'>Failed</span>
    }

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            );
            return <div key={question.id}>{question.question} - {renderResultMark(question, answer)}</div>
        })

    }

    const restart = () => {
        dispatch({ type: RESET_QUIZ });
    }
    const back = () => {
        navigate('/playground')
    }

    const next = () => {
        const answer = {
            questionId: question.id,
            answer: currentAnswer
        }

        if (!currentAnswer) {
            dispatch({ type: SET_ERROR, error: 'Please select an option!' })
            return;
        }

        dispatch({ type: SET_ANSWERS, answers: [...answers, answer] })
        dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' })

        if (currentQuestion + 1 < questions.length) {
            dispatch({ type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1 })
            return;
        }

        dispatch({ type: SET_SHOW_RESULTS, showResults: true })

    }

    if (showResults) {
        return (
            <div className='container results'>
                <h2>Results</h2>
                <ul>{renderResultsData()}</ul>
                <button className='btn btn-primary' onClick={restart}>
                    Restart
                </button>
                <button className='btn btn-primary' onClick={back}>
                    finished
                </button>
            </div>
        )

    } else {
        return (
            <QuizContext.Provider value={{ state, dispatch }}>
                <div className="container">
                    <Progress total={questions.length} current={currentQuestion + 1} />
                    <Question question={question.question} />
                    {renderError()}
                    <Answers questions={questions} currentAnswer={currentAnswer} dispatch={dispatch} />
                    <button className='btn btn-primary' onClick={next}>
                        Confirm and Continue
                    </button>
                </div>
            </QuizContext.Provider >
        );
    }
}

export default PracticeGame;
