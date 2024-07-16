const ListItem = (props) => {
    // eslint-disable-next-line react/prop-types
    return <li>{props.value}</li>;
}

export const ShowSeason = (props) => {
    // eslint-disable-next-line react/prop-types
    const listItems = props.seasons.map((season) => <ListItem key={season} value={season}></ListItem>);
    return (
        <ul>
        {listItems}
        </ul>
    );
}