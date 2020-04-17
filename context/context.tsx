import {createContext, useState} from "react";
import { Bee, Hive } from "graph/graphql";

export interface ContextType {
    title: JSX.Element,
    setTitle: (s:any) => void,
    login : boolean,
    setLogin: (x: boolean) => void,
    current: Bee | Hive,
    setCurrent: (a: any) => void,
}

let initialContext: ContextType = {
    title: null,
    setTitle: (s: string) => {},
    login: false,
    setLogin: (x: boolean) => {},
    current: null,
    setCurrent: () => {},
};

export const useConstructorContext = () => {
    

    const [login, setLogin] = useState(false);
    const [title, setTitle] = useState(null);
    const [current, setCurrent] = useState(null);

    return {
        title,
        setTitle,
        login,
        setLogin,
        current,
        setCurrent,
    }
};

export default createContext(initialContext);
