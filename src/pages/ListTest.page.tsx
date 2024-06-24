
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import Timer from "../components/Timer.tsx";
import {Params, useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";


function ListTestPage() {
    const {questionId}: Readonly<Params<string>> = useParams();
    const currentQuestionId = questionId ? questionId : "0";
    const currentQuestion = useTypedSelector(state => state.qustions.find((question) => question.id_question === currentQuestionId));
 /*  currentQuestion  ???????????*/
    console.log(currentQuestion)

    return (
        <section className="flex flex-col items-start justify-center gap-4 max-w-[1024px] w-full max-h-[768px] h-full">
            <div>
                <h1 className={'text-3xl font-bold'}>Тестирование</h1>
                <Timer />
            </div>
            <Breadcrumbs/>
            <span>Что должен знать фронтенд-разработчик? Назовите три ключевых технологии</span>
            <form>
                {/*<ul>*/}
                {/*    {arrayQuestions.length && arrayQuestions.map((question: QuestionVariantAnswer) => <li key={`${question.id}`}>*/}
                {/*        <input type="radio" id={`${question.id}`}/>*/}
                {/*        <label htmlFor={`${question.id}`}>{question.value}</label>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
                <button type={"submit"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'}>Следующий</button>
            </form>
        </section>
    );
}

export default ListTestPage;