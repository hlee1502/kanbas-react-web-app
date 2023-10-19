import "./index.css";
import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { BsFillGearFill } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";

function ButtonsG() {
    return (
        <div className="wd-grades mb-3">
            <div className="row d-flex">
                <div className="col">
                    <button type="button" className="btn btn-secondary float-end">
                        <BsFillGearFill style={{marginBottom: "2px"}}/>
                    </button>
                    <button type="button" className="btn btn-secondary float-end">
                        <FaFileExport className="wd-button-icon"/>
                        Export
                    </button>
                    <button type="button" className="btn btn-secondary float-end">
                        <FaFileImport className="wd-button-icon"/>
                        Import
                    </button>
                </div>
            </div>

            <div className="row d-flex">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="student-names" className="form-label" style={{fontWeight: "bold"}}>Student Names</label>
                        <input type="text" className="form-control" id="student-names" placeholder="Search Students"/>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="assignment-name" className="form-label" style={{fontWeight: "bold"}}>Assignment Names</label>
                        <input type="text" className="form-control" id="assignment-name" placeholder="Search Assignments"/>
                    </div>
                </div>
            </div>
            
            <button type="button" className="btn btn-secondary"><FiFilter className="wd-button-icon"/>Apply Filters</button>
        </div>
    );
}

export default ButtonsG;