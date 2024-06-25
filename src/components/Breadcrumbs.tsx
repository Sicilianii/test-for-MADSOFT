import React from 'react';
import {Question} from "../types/Question.type.ts";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import clsx from "clsx";

const Breadcrumbs: React.FC = () => {
    const currentQuestion: Question[] = useTypedSelector((state: Question[]) => state);

    return (
        <ul className={'flex gap-2 w-full'}>
            { currentQuestion.length && currentQuestion.map((question: Question) =>
                <li key={`${question.id_question}`} className={clsx(
                    question.status === 'success' ? 'bg-black' : question.current ? 'bg-[#b92a35]' : 'bg-[#e1e1e1]',
                    'w-full h-2 rounded-sm',
                )}>
                </li>
            )}
        </ul>
    );
};


export default Breadcrumbs;