function TerneryOperator() {
    let LoggedIn = true;
    
    return (
        <div>
            <h2>Logged In</h2>
            { LoggedIn ? <p>Welcome</p> : <p>Please login</p>}
        </div>
    );
}

export default TerneryOperator;