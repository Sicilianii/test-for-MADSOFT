import { Link } from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector.tsx";

function StartTestPage() {
    const countQuest: number = useTypedSelector(state => state.questions.length);
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className={'text-3xl font-bold'}>Тест на знание JavaScript</h1>
            <p>На выполнение теста отводится 20 минут.</p>
            <span>Ответьте на {countQuest} вопроса и узнайте ваш уровень знания JavaScript.</span>
            <Link to={"/question"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'}>Начать</Link>
        </div>
    );
}

export default StartTestPage;