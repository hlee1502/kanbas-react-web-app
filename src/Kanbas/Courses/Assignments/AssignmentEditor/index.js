import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css"

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="wd-assign-edit">
        <div className="mb-3">
            <label for="assignment-name" className="form-label">Assignment Name</label>
            <input id="assingment-name" value={assignment.title} className="form-control mb-2" />
        </div>
        <div className="mb-3">
            <textarea className="form-control" id="assignment-description" rows="3" placeholder="Assignment Description"></textarea>
        </div>
        <div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    <label for="num-points" className="form-label">Points</label>
                </div>
                <div className="col-7">
                    <input type="number" className="form-control" id="num-points"/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    <label for="assignment-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-7">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Assignments</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    <label for="display-grade" className="form-label">Display Grade as</label>
                </div>
                <div className="col-7">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Percentage</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    
                </div>
                <div className="col-7">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Do not count this assignment towards the final grade
                        </label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    <label for="sub-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-7">
                    <div className="border border-secondary rounded p-3">
                        <div className="dropdown" style={{width: "200px"}}>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Online</button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <p style={{fontWeight: "bold", marginTop: "10px", marginBottom: "5px"}}>Online Entry Options</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="text-entry"/>
                            <label className="form-check-label" for="text-entry">
                                Text Entry
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="url"/>
                            <label className="form-check-label" for="url">
                                Website URL
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="media-rec"/>
                            <label className="form-check-label" for="media-rec">
                                Media Recordings
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="stud-annotations"/>
                            <label className="form-check-label" for="stud-annotations">
                                Student Annotation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="file-upload"/>
                            <label className="form-check-label" for="file-upload">
                                File Uploads
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-3 text-end">
                    <label for="assign" className="form-label">Assign</label>
                </div>
                <div className="col-7">
                    <div className="border border-secondary rounded p-3">
                        <div className="mb-3">
                            <label for="assign-to" className="form-label">Assign To</label>
                            <input type="text" className="form-control" id="assignment-name"/>
                        </div>
                        <div className="mb-3">
                            <label for="due-date" className="form-label">Due</label>
                            <input type="date" className="form-control" id="due-date"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label for="avail-date" className="form-label">Available from</label>
                                    <input type="date" className="form-control" id="avail-date"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label for="until-date" className="form-label">Until</label>
                                    <input type="date" className="form-control" id="until-date"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary" style={{marginRight: "3px"}}>
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-primary me-2">Save</button>
        </div>
    </div>
  );
}


export default AssignmentEditor;

