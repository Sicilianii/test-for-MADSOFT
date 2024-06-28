import Breadcrumbs from "../components/Breadcrumbs.tsx";
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";
import {Question} from "../types/Question.type.ts";
import TypeRadio from "../components/SelectTypeAnswers/TypeRadio.tsx";
import TypeCheckbox from "../components/SelectTypeAnswers/TypeChekbox.tsx";
import useTimer, {IRetutnTimer} from "../hooks/useTimer.tsx";
import clsx from "clsx";


function ListTestPage() {
    const countQuest: number = useTypedSelector(state => state.questions.length);
    const startTime: number = useTypedSelector(state => state.time.timeStop);
    const {min, sec, timeIsOver}: IRetutnTimer = useTimer(startTime, countQuest, 3)
    const currentQuestion: Question = useTypedSelector((state) => state.questions.find( (question:Question) => question.current) || state.questions[0]);

    console.log(min, sec, timeIsOver);

    return (
        <section className="flex flex-col items-start justify-center gap-4 max-w-[1024px] w-full max-h-[768px] h-full">
            <div className={'flex gap-5'}>
                <h1 className={'text-3xl font-bold'}>Тестирование</h1>
                <div className={clsx(
                    timeIsOver ? 'border-[#b92a35] text-[#b92a35]' : 'border-black font-black',
                    'flex py-1 px-4 border border-solid rounded font-bold'
                )}>{min} : {sec}</div>
            </div>
            <Breadcrumbs/>
            <span className={'font-bold'}>{currentQuestion?.title || 'not found'}</span>
            {currentQuestion.type === 'radio' && <TypeRadio question={currentQuestion}/>}
            {currentQuestion.type === 'checkbox' && <TypeCheckbox question={currentQuestion}/>}
        </section>
    );
}

export default ListTestPage;