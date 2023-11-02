import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { LuFileText } from "react-icons/lu";
import { AiFillCheckCircle } from "react-icons/ai";
import ButtonsA from "./ButtonsA";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-assignments wd-kanbas">
        <ButtonsA/>
        <div className="list-group">
            <li className="list-group-item list-group-item-secondary d-flex align-items-center">
                <div className="col-">
                    <span style={{fontSize: "large"}}>Assignments</span>
                </div>
                <div className="col ">
                    <div className="float-end d-flex align-items-center">
                        <p className="border border-secondary rounded-pill p-1 wd-pill">40% of Total</p>
                        <AiOutlinePlus style={{marginRight: "15px", fontSize: "20px"}}/>
                        <BsThreeDotsVertical style={{fontSize: "20px"}}/>
                    </div>
                </div>
            </li>
            {courseAssignments.map((assignment) => (
            <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item wd-assign-items d-flex align-items-center">
                    <div className="col-">
                        <LuFileText style={{fontSize: "25px", marginRight: "15px", color: "green"}}/>
                    </div>
                    <div className="col-">
                        <span style={{fontWeight: "bold"}}>{assignment.title}</span> <br/>
                        <span style={{fontSize: "smaller", marginBottom: "0px"}}>Multiple Modules | 
                        <span style={{fontWeight: "bold"}}> Due </span>{assignment.due} | {assignment.points} pts</span> 
                    </div>
                    <div className="col">
                        <div className="float-end d-flex align-items-center">
                            <AiFillCheckCircle style={{marginRight: "15px", fontSize: "20px", color: "green"}}/>
                            <BsThreeDotsVertical style={{fontSize: "20px"}}/>
                        </div>
                    </div>
            </Link>
            ))}
        </div>
    </div>
  );
}

export default Assignments;