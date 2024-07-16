import {useEffect, useState} from "react";

export default function ChildState(props) {

    const [state, setState] = useState({message: props.message, name: props.user.name, age: props.user.age});

    return (<>
        {state.message} {state.name}
    </>);
}