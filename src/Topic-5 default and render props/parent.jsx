import Child from "./Child";
const Parent = () => {
    const greet = (user) => <h3>Hello {user}...!</h3>;
    const msg = () => <h3>Namaste Developers...💃</h3>;
    return <div>
        <h1>Parent Component</h1>
        <Child greet={greet} msg={msg} />
    </div>

    }
export default Parent;