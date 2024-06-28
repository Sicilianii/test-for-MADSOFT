import {useEffect, useState} from "react";


export interface IRetutnTimer {
    min: number,
    sec: number
    timeIsOver: boolean
}



export default function useTimer(startTime: number, countTasks: number, delay: number): IRetutnTimer {
    const [timeFinished, setTimeFinished] = useState<boolean>(false);
    const [timeStartedRef, setTimeStartedRef] = useState<number>(startTime || (countTasks * delay * 60 * 1000));
    const timeStarted = new Date().getTime();

    console.log(timeStartedRef)

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeStartedRef + timeStarted <= new Date().getTime()) {
                setTimeStartedRef(0);
                // console.log('this ALl');
                setTimeFinished(true);
                return;
            }
            setTimeStartedRef((timeStartedRef + timeStarted) - new Date().getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    },[])

    return {min: Math.floor(timeStartedRef / 1000 / 60), sec: Math.ceil(timeStartedRef / 1000 % 59), timeIsOver: timeFinished};
}
