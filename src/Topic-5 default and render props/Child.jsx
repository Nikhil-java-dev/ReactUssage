const Child = ({greet, msg}) => {
    return (
        <div>
            <h2>Child Component</h2>
            {greet("Hi")}
            {msg()}
        </div>
    );
}

export default Child;