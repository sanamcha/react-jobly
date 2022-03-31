import { useState, useEffect } from "react";

//custom hook to sync with localStorage

function useLocalStorage(key, firstValue="") {
    const initialValue = localStorage.getItem(key) || firstValue;

    const [item, setItem] = useState(initialValue);

    useEffect(function keyInLocalStorage(){
        if(item === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);
    return [item, setItem];
}

export default useLocalStorage;