import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

function ButtonsA() {
    return (
        <div className="wd-assignments">
            <div className="d-flex">
                <div className="col w-25">
                    <input className="form-control" type="text" placeholder="Search for Assignment" aria-label="assignment-search"/>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-secondary float-end">
                        <BsThreeDotsVertical className="wd-icon"/>
                    </button>
                    <button type="button" className="btn btn-primary float-end">
                        <BiPlus className="wd-icon" style={{marginRight: "3px"}}/>
                        Assignment
                    </button>
                    <button type="button" className="btn btn-secondary float-end">
                        <BiPlus className="wd-icon" style={{marginRight: "3px"}}/>
                        Group
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default ButtonsA;