import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation/>
            <div className="container-fluid" style={{ paddingLeft: "none"}}>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
            </div>
        </div>
    );
}

export default Kanbas;