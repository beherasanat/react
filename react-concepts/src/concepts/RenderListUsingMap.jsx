const ListItem = (props) => {
    return <li>{props.value}</li>;
}

export const ShowSeason = (props) => {
    const listItems = props.seasons.map((season) => <ListItem key={season} value={season}></ListItem>);
    return (
        <ul>
        {listItems}
        </ul>
    );
}