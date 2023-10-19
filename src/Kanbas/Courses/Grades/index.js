import db from "../../Database";
import { useParams } from "react-router-dom";
import ButtonsG from "./ButtonsG";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
        <ButtonsG/>
        <div className="table-responsive">
            <table className="table table-bordered table-striped text-center align-items-center">
                <thead>
                    <tr>
                        <th style={{textAlign: "left"}}>Student Name</th>
                        {assignments.map((assignment) => (<td>{assignment.title}</td>))}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                            <td className="wd-grades-names">{user.firstName} {user.lastName}</td>
                            {assignments.map((assignment) => {
                                const grade = db.grades.find(
                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                return (<td>{grade?.grade || ""}</td>);})}
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    </div>);
}

export default Grades;