import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import {AiOutlineFileText} from "react-icons/ai"

function Dashboard() {
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
}
export default Dashboard;