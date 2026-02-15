{/*
const User = () => {
     <div>
        <h1>User component</h1>
     </div>

    const isLogin = true;
    let page;

    if (!isLogin) {
        page = <h1>Home Page</h1>;
    }

    else{
        page = <h1>Dashboard Page</h1>;
    }
     return (
        <div>
            <h1>User Component</h1>
            {page}
        </div>
        );

};

*/}


const User = () => {
    const isLogin = false;
        const page =  isLogin ? <h1>Dashboard page</h1> : <h1>Home Page</h1>;
        return (
            <div>
                <h1>User Component</h1>
                {page}
            </div>
        )
}




export default User;