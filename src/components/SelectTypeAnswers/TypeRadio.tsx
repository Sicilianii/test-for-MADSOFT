import { QuestionVariantAnswer} from "../../types/Question.type.ts";


function TypeRadio({arrayQuestions}: {arrayQuestions: QuestionVariantAnswer[]}) {
    return arrayQuestions.length && (
        <>
            {arrayQuestions.map((question: QuestionVariantAnswer) => <li key={`${question.id}`}>
                <input type="radio" id={`${question.id}`}/>
                <label htmlFor={`${question.id}`}>{question.value}</label>
            </li>)}
        </>
    )
}

export default TypeRadio;