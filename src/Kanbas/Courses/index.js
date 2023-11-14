import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { FiMenu } from "react-icons/fi";
import "./index.css";
import Home from "./Home";
import ModuleList from "./Modules/ModuleList";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {useEffect, useState} from "react";
import axios from "axios";

function Courses() {
    const URL = "http://localhost:4000/api/courses";

    const { courseId } = useParams();

    const [course, setCourse] = useState({});

    const findCourseById = async (courseId) => {
        const response = await axios.get(`${URL}/${courseId}`);
        setCourse(response.data);
    }

    useEffect(() => {findCourseById(courseId);}, [courseId]);

    const routes =
        <Routes>
            <Route path="Home" element={<p>Home</p>} />
            <Route path="Modules" element={<p>Modules</p>} />
            <Route path="Piazza" element={<p>Piazza</p>} />
            <Route path="Zoom Meetings" element={<p>Zoom Meetings</p>} />
            <Route path="Assignments" element={<p>Assignments</p>} />
            <Route path="Assignments/:assignmentId" element={<p>Assignment Editor</p>}/>
            <Route path="Quizzes" element={<p>Quizzes</p>} />
            <Route path="Grades" element={<p>Grades</p>} />
            <Route path="People" element={<p>People</p>} />
            <Route path="Panopto Video" element={<p>Panopto Video</p>} />
        </Routes>
    const breadcrumb = (
        <nav aria-label="breadcrumb" className="wd-breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item wd-class-breadcrumb">{course._id}</li>
                <li className="breadcrumb-item active wd-current-page" aria-current="page">{routes}</li>
            </ol>
        </nav>
    );

    return (
        <div>
            <div className="row">
                <div className="d-flex wd-header mt-2 w-100">
                    <FiMenu className="wd-menu-icon"/>
                    {breadcrumb}
                </div>
                <div style={ {paddingLeft: "10px", paddingRight: "10px"}}>
                    <hr/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-1">
                    <CourseNavigation />
                </div>
                <div className="col-11">
                    <div className="wd-pages">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<ModuleList/>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                            />
                            <Route path="Grades" element={<Grades/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Courses;