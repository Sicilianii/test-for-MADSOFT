
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import Timer from "../components/Timer.tsx";


function ListTestPage() {

    return (
        <div className="flex flex-col items-center justify-center gap-4">
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
        </div>
    );
}

export default ListTestPage;