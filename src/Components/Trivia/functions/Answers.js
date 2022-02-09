import React, { useContext } from 'react';
import Answer from './Answer';
import QuizContext from '../context/quizContext';


function Answers(props) {
    const { state, dispatch } = useContext(QuizContext);
    const { currentAnswer, currentQuestion } = state;
    const { questions } = props;

    return (
        <>
            <Answer
                letter='a'
                answer={questions[currentQuestion].answer_a}
                dispatch={dispatch}
                selected={currentAnswer === 'a'}
            />
            <Answer letter='b'
                answer={questions[currentQuestion].answer_b}
                dispatch={dispatch}
                selected={currentAnswer === 'b'}
            />
            <Answer
                letter='c'
                answer={questions[currentQuestion].answer_c}
                dispatch={dispatch}
                selected={currentAnswer === 'c'}
            />
            <Answer
                letter='d'
                answer={questions[currentQuestion].answer_d}
                dispatch={dispatch}
                selected={currentAnswer === 'd'}
            />
        </>


    );
}
export default Answers;