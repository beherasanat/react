
export const ChildProps = (props) => {
    return (<>
        <h1>{props.message} {props.user.name}</h1>
    </>);
}