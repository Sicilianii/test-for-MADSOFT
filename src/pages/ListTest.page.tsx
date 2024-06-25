
import Breadcrumbs from "../components/Breadcrumbs.tsx";
import Timer from "../components/Timer.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import {Question} from "../types/Question.type.ts";
import TypeRadio from "../components/SelectTypeAnswers/TypeRadio.tsx";
function ListTestPage() {


    const currentQuestion: Question = useTypedSelector((state: Question[]) => state.find( (question:Question) => question.current) || state[0]);

    console.log(currentQuestion)
    return (
        <section className="flex flex-col items-start justify-center gap-4 max-w-[1024px] w-full max-h-[768px] h-full">
            <div>
                <h1 className={'text-3xl font-bold'}>Тестирование</h1>
                <Timer />
            </div>
            <Breadcrumbs/>
            <span className={'font-bold'}>{currentQuestion?.title || 'not found'}</span>
            {currentQuestion.type === 'radio' && <TypeRadio question={currentQuestion}/>}

        </section>
    );
}

export default ListTestPage;