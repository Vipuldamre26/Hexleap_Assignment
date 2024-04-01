import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

const Contextapi = ({children}) => {

    const [ toggle, setToggle ] = useState(false);
    const [ bg, setBg ] = useState('#F7F7F8');
    const [ card, setCard ] = useState('white');
    const [ main, setMain ] = useState('white');

    return(
        <userContext.Provider value = { { toggle, setToggle, bg, setBg, card, setCard, main, setMain } }>
            {children}
        </userContext.Provider>
    )
}

export default Contextapi;