function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;

    const contstant1 = functionScoped - blockScoped;

    return (
        <div>
            <h2>Variables and Constants</h2>
            functionScoped = { functionScoped } <br/>
            block Scoped = { blockScoped } <br/>
            contstant1 = { contstant1 } <br/>
        </div>
    );
}

export default VariablesAndConstants;