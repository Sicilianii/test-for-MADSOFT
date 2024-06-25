import React from 'react';
import {Question} from "../types/Question.type.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import clsx from "clsx";

const Breadcrumbs: React.FC = () => {
    const currentQuestion: Question[] = useTypedSelector((state: Question[]) => state);

    return (
        <ul className={'flex gap-1 w-full'}>
            { currentQuestion.length && currentQuestion.map((question: Question) =>
                <li key={`${question.id_question}`} className={clsx(
                    question.status ? 'bg-black' : 'bg-orange-700',
                    'w-full h-2'
                )}>
                </li>
            )}
        </ul>
    );
};


export default Breadcrumbs;