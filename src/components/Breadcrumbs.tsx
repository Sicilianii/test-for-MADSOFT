import React from 'react';
import {Question, QuestionVariantAnswer} from "../types/Question.type.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import {Link} from "react-router-dom";

const Breadcrumbs: React.FC = () => {
    const currentQuestion: Question[] = useTypedSelector(state => state)

    return (
        <ul>
            {/*{currentQuestion.length && currentQuestion.map((question: QuestionVariantAnswer) => <>)}*/}
            <li>
                <Link to={''}></Link>
            </li>
        </ul>
    );
};


export default Breadcrumbs;