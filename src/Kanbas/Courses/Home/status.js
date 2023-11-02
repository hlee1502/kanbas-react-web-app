import "./index.css";
import { FaFileImport } from "react-icons/fa6";
import { FaRegLifeRing } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa6";
import { BsFillBellFill } from "react-icons/bs";
import { LuBan } from "react-icons/lu";
import { AiFillCheckCircle } from "react-icons/ai";

function Status() {
    return (
        <div className="wd-status wd-kanbas">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">
                    <LuBan className="wd-icon"/>
                    Unpublish
                </button>
                <button type="button" className="btn btn-secondary">
                    <AiFillCheckCircle className="wd-icon" style={{color: "green"}}/>
                    Published
                </button>
            </div>
            <div className="d-grid gap-2 col-12 mt-2 wd-side-buttons">
                <button className="btn btn-secondary" type="button">
                    <FaFileImport className="wd-icon"/>
                    Import Existing Content</button>
                <button className="btn btn-secondary" type="button">
                    <FaFileImport className="wd-icon"/>
                    Import from Commons</button>
                <button className="btn btn-secondary" type="button">
                    <FaRegLifeRing className="wd-icon"/>
                    Choose Home Page</button>
                <button className="btn btn-secondary" type="button">
                    <BsBarChartLineFill className="wd-icon"/>
                    View Course Stream</button>
                <button className="btn btn-secondary" type="button">
                    <FaBullhorn className="wd-icon"/>
                    New Announcement</button>
                <button className="btn btn-secondary" type="button">
                    <BsBarChartLineFill className="wd-icon"/>
                    New Analytics</button>
                <button className="btn btn-secondary" type="button">
                    <BsFillBellFill className="wd-icon"/>
                    View Course Notifications</button>
            </div>
            <p style={{marginTop: "15px", marginBottom: "0px"}}>To Do</p>
            <hr style={{marginTop: "0px"}}/>
            <p style={{marginTop: "15px", marginBottom: "0px"}}>Coming Up</p>
            <hr style={{marginTop: "0px"}}/>
        </div>
    );
}   

export default Status;