import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import ButtonsM from "./ButtonsM";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setModules, addModules, deleteModule, updateModule, setModule,} from "./modulesReducer";
import {findModulesForCourse, createModule} from "./client.js";
import * as client from "./client.js";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {dispatch(addModules(module));});
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {dispatch(deleteModule(moduleId));});
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    useEffect(() => {findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)));}, [courseId]);

    return (
        <ul className="list-group">
            <li className="list-group-item d-flex">
                <div className="col-10">
                    <div className="mb-2">
                        <input className="form-control" value={module.name} onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}/>
                    </div>
                    <div>
                        <textarea className="form-control" value={module.description} onChange={(e) => dispatch(setModule({...module, description: e.target.value}))}/>
                    </div>
                </div>
                
                <div className="col">
                    <button className="float-end btn btn-success" onClick={handleAddModule}>Add</button>
                    <button className="float-end btn btn-primary" onClick={handleUpdateModule} style={{marginRight: "5px"}}>Update</button>
                </div>
                
            </li>
            {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="list-group-item">
                    <div className="d-flex">
                        <div className="col-10">
                            <div>
                                <h3>{module.name}</h3>
                            </div>
                            <div>
                                <p>{module.description}</p>
                            </div>
                            <div>
                                <p>{module._id}</p>
                            </div>
                        </div>
                        <div className="col">
                        <button className="btn btn-success float-end" onClick={() => dispatch(setModule(module))}>Edit</button>
                        <button className="btn btn-danger float-end" onClick={() => handleDeleteModule(module._id)} style={{marginRight: "5px"}}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ModuleList;