import { Link } from 'react-router-dom';

function StartTestPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className={'text-3xl font-bold'}>Тест на знание JavaScript</h1>
            <p>На выполнение теста отводится 20 минут.</p>
            <span>Ответьте на 24 вопроса и узнайте ваш уровень знания JavaScript.</span>
            <Link to={"/question/1"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'}>Начать</Link>
        </div>
    );
}

export default StartTestPage;