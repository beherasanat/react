import {useContext} from "react";
import {MyContext} from "../../App.jsx";

const UseContextTest = () => {
    const contextValue = useContext(MyContext);
    return (<div>context value = {contextValue}</div>);
};

export default UseContextTest;