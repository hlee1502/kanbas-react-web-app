import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai"

function ButtonsM() {
    return (
        <div className="wd-modules wd-kanbas">
            <div className="float-end wd-mod-buttons">
                <button type="button" className="btn btn-secondary">Collapse All</button>
                <button type="button" className="btn btn-secondary">View Progress</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiOutlineCheckCircle className="wd-icon" style={{marginRight: "3px", color: "green"}}/>
                        Publish All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary">
                    <BiPlus className="wd-icon" style={{marginRight: "3px"}}/>
                    Module
                </button>
                <button type="button" className="btn btn-secondary text-center">
                    <BsThreeDotsVertical className="wd-icon"/>
                </button>
            </div>
            <div style={{clear: "both"}}></div>
            <hr/>
        </div>
    );
}

export default ButtonsM;