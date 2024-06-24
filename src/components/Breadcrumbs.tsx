import React from 'react';
import {Question} from "../types/Question.type.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import {Link} from "react-router-dom";
import clsx from "clsx";

const Breadcrumbs: React.FC = () => {
    const currentQuestion: Question[] = useTypedSelector(state => state.qustions)

    return (
        <ul className={'flex gap-1 w-full'}>
            { currentQuestion.length && currentQuestion.map((question: Question) =>
                <li key={`${question.id_question}`} className={clsx(
                    question ? 'bg-black' : 'bg-orange-700',
                    'w-full h-2'
                )}>
                    <Link to={`/question/${question.id_question}`}>link</Link>
                </li>
            )}
        </ul>
    );
};


export default Breadcrumbs;