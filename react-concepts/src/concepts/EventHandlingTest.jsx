import React from 'react';

export const EventHandlingTest = () => {
    const [isToggleOn, setIsToggleOn] = React.useState(false);

    const handleClick = (event) => {
        console.log(event.type, event);
        setIsToggleOn(!isToggleOn);
    };

    return (
        <>
            <button onClick={handleClick}>{isToggleOn?'ON':'OFF'}</button>
        </>
    );
}