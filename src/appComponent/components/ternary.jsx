import { useState } from "react";

const Ternar = () => {

    const isGoingOut = true;
    const [state, setState] = useState(true);

    function handleState(){
        setState(prev => !prev)
    }

    if (isGoingOut === true){
        answer = "Yes";
    }else{
        answer = "No";
    }

    

    return(
        <div>hey!</div>
    )
}