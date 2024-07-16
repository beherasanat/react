import {useEffect, useState} from "react";

const UseEffectHookTest = ({prop}) => {
    const [count, setData] = useState(prop.count);

    useEffect(() => {
        console.log("componentDidMount() : Only load once after rendering");
    }, []);
    useEffect(()=>{
        console.log("componentDidUpdate() : component updated.");
    }, [count]);
    useEffect(()=>{
        return ()=>{
            console.log("componentWillUnmount() : component will unmount.");
        }
    }, [count]);

    return (
        <div>Use Effect Hook Test
            <input type={"button"} onClick={()=>setData(count+1)} value={count}></input>
        </div>
    );
};

export default UseEffectHookTest;
