import {Question} from "../../types/Question.type.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {nextQuestion} from "../../app/store/slices/questions.slice.ts";
import {Dispatch, UnknownAction} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

interface IFormInput  {
    [i: string]: string;
}

function TypeCheckbox({question}: {question: Question}) {
    const { register, handleSubmit, reset } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        reset();
        dispatch(nextQuestion())
    }
    const dispatch: Dispatch<UnknownAction> = useDispatch();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-center gap-4 ">
            <ul className="flex flex-col items-start justify-center gap-4 pl-5 my-5">
                {question.variant.length && question.variant.map( (variant) =>
                    <li className="flex items-center justify-center gap-4 " key={variant.value}>
                        <input {...register(`answer`)} type={'checkbox'} id={variant.value} value={variant.id} />
                        <label htmlFor={variant.value}>{variant.value}</label>
                    </li>
                )}
            </ul>
            <button type={"submit"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'}>Следующий</button>
        </form>
    )
}

export default TypeCheckbox;