const List = (props) => {
    const {a, msg, user} = props;
    return(
        <>
            <h1>msg:{msg}</h1>
            <h2>Value of a is: {a}</h2>
            <h3>Username: {user}</h3>
            </>
    );
};

export default List;