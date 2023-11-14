import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import {AiOutlineFileText} from "react-icons/ai"

function Dashboard(
    {courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}
) {

    return(
        <div className="mt-2">
            <h1>Dashboard</h1>
            <hr/>
            <h2>Published Courses</h2>
            <hr/>
            <div className="d-flex border rounded p-3 mb-3">
                <div className="col-10">
                    <input value={course.name} className="form-control mb-1"
                        onChange={(e) => setCourse({...course, name: e.target.value})}/>
                    <input value={course.number} className="form-control mb-1"
                        onChange={(e) => setCourse({...course, number: e.target.value})}/>
                    <input value={course.startDate} className="form-control mb-1" type="date"
                        onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                    <input value={course.endDate} className="form-control mb-1" type="date"
                        onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                </div>
                
                <div className="col">
                    <button onClick={updateCourse} className="btn btn-primary float-end">Update</button>
                    <button onClick={addNewCourse} className="btn btn-success float-end" style={{marginRight: "5px"}}>Add</button>
                </div>
                
            </div>
            
            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item d-flex justify-content-between align-items-center">
                        {course.name}
                        <div className="float-end">
                            <button className="btn btn-warning" style={{marginRight: "5px"}} onClick={(event) => {event.preventDefault(); setCourse(course);}}>Edit</button>
                            <button className="btn btn-danger" onClick={(event) => {event.preventDefault(); deleteCourse(course);}}>Delete</button>
                        </div>
                        
                    </Link>
                ))}
            </div>
        </div>
    );
}

/* function Dashboard() {
  const courses = db.courses;
  return (
    <div className="mt-2">
        <h1>Dashboard</h1>
        <hr/>
        <div className="wd-content">
            <h2>Published Courses</h2>
            <hr/>
            <div className="d-flex">
                {courses.map((course) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>

                    <div className="card">
                        <img src={course.image} className="card-img-top wd-card-img"/>
                        <div className="card-body">
                            <p className="card-title text-truncate">{course.number} {course.name}</p>
                            <p className="card-text">
                                <div className="wd-card-m-line">
                                    {course.number}.{course._id}
                                </div>
                                <div className="wd-card-l-line">
                                    {course._id} {course.semester}
                                </div>
                            </p>
                            <AiOutlineFileText className="wd-icon"/>
                        </div>
                    </div>
                    
                </Link>
                ))}
            </div>
        </div>
        
    </div>
  );
} */

export default Dashboard;