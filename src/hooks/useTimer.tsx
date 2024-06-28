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
    const [timeFinished, setTimeFinished] = useState<boolean>(false);
    const [timeStartedRef, setTimeStartedRef] = useState<number>(startTime || (countTasks * delay * 60 * 1000));
    const timeStarted = new Date().getTime();

    console.log(timeStartedRef)

    useEffect(() => {
        const pepe = timeStartedRef
        const interval = setInterval(() => {
            if (timeStartedRef + timeStarted <= new Date().getTime()) {
                setTimeStartedRef(0);
                // console.log('this ALl');
                setTimeFinished(true);
                return;
            }
            setTimeStartedRef(prevState => (timeStartedRef + timeStarted) - new Date().getTime());
        }, 1000);
        return () => {
            dispatch(setTime(timeStartedRef));
            clearInterval(interval);
        };
    },[])

    return {min: Math.floor(timeStartedRef / 1000 / 60), sec: Math.ceil(timeStartedRef / 1000 % 59), timeIsOver: timeFinished};
}
