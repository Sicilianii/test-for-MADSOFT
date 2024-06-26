import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTime} from "../app/store/slices/timer.slice.ts";

export interface IRetutnTimer {
    min: number,
    sec: number
    timeIsOver: boolean
}



export default function useTimer(startTime: number, countTasks: number, delay: number): IRetutnTimer {
    const dispatch = useDispatch();
    const [currentTime, setCurrentTime] = useState<number>(countTasks * delay * 60 * 1000);
    const [timeStarted, setTimeStarted] = useState<number>((startTime || currentTime) + new Date().getTime());
    const [timeFinished, setTimeFinished] = useState<boolean>(false);

    useEffect(() => {

        const interval = setInterval(() => {
            if (timeStarted <= new Date().getTime()) {
                setCurrentTime(0);
                setTimeFinished(true);
                return;
            }
            setCurrentTime(timeStarted - new Date().getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
            if (currentTime) { dispatch(setTime(currentTime)) } else { dispatch(setTime(0)) }
        };
    },[])

    return {min: Math.floor(currentTime / 1000 / 60), sec: Math.ceil(currentTime / 1000 % 59), timeIsOver: timeFinished};
}
