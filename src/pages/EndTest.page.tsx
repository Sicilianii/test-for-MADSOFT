
import {Link} from "react-router-dom";

function EndTestPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className={'text-3xl font-bold'}>Тест на знание JavaScript</h1>
            <p>Ваш уровень знания JavaScript очень низкий</p>
            <span>Вы ответили правильно на 0 из 24 вопросов за 18 секунды.</span>
            <Link to={"/"} className={'bg-[#E52B50] py-2 px-8 rounded-md text-amber-50'}>Пройти заново</Link>
        </div>
    );
}

export default EndTestPage;