import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TerneryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import JsonStringify from "./JsonStringify";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TerneryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <JsonStringify/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}

export default JavaScript;