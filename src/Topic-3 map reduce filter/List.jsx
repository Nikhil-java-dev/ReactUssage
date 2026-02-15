/*
const List = (props) => {
    const {username, index} = props;
    return <li key = {index}>Username: {username}</li>
};
*/


const List = (props) => {
    console.log(props);
    const {username} = props;
    return <li> Username: {username}</li>;
};

export default List;