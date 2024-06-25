
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import Timer from "../components/Timer.tsx";
// import {MouseEventHandler, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import {nextQuestion} from "../app/store/questions.slice.ts";
import {useDispatch} from "react-redux";
import {Question} from "../types/Question.type.ts";
import {Dispatch, UnknownAction} from "@reduxjs/toolkit";


// import {Params, useParams} from "react-router-dom";
// import {useTypedSelector} from "../hooks/useTypedSelector.tsx";


function ListTestPage() {
    // const {questionId}: Readonly<Params<string>> = useParams();
    // const currentQuestionId = questionId ? questionId : "0";
    // const currentQuestion = useTypedSelector(state => state.qustions.find((question) => (question.id_question).toString() === currentQuestionId));
 /*  currentQuestion  ???????????*/
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const currentQuestion: Question | undefined = useTypedSelector((state: Question[]) => state.find( (question:Question) => question.current));

    console.log(currentQuestion)
    return (
        <section className="flex flex-col items-start justify-center gap-4 max-w-[1024px] w-full max-h-[768px] h-full">
            <div>
                <h1 className={'text-3xl font-bold'}>Тестирование</h1>
                <Timer />
            </div>
            <Breadcrumbs/>
            <span>{currentQuestion?.title || 'not found'}</span>
            <form>
                {/*<ul>*/}
                {/*    {arrayQuestions.length && arrayQuestions.map((question: QuestionVariantAnswer) => <li key={`${question.id}`}>*/}
                {/*        <input type="radio" id={`${question.id}`}/>*/}
                {/*        <label htmlFor={`${question.id}`}>{question.value}</label>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
                <button type={"button"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'} onClick={() => dispatch(nextQuestion())}>Следующий</button>
            </form>
        </section>
    );
}

export default ListTestPage;