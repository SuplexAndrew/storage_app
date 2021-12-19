import {useCallback, useRef} from "react";

export default function useDebounce(callback:(...args: any[]) => void, delay:number) {
    const timer = useRef<any>(null)

    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback()
        }, delay)
    }, [callback, delay])
}