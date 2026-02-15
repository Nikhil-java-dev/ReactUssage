const Child = (props) => {
    console.log(props.person);
    return <div>
            <h2>Child Component</h2>
            <p>Name: {props.person.fullName}</p>
            <p>Age: {props.person.age}</p>
        </div>;
};

export default Child;