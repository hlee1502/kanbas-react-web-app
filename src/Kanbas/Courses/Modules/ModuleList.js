import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import ButtonsM from "./ButtonsM";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addModule, deleteModule, updateModule, setModule,} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                    <button className="float-end btn btn-success" onClick={() => dispatch(addModule({...module, course: courseId}))}>Add</button>
                    <button className="float-end btn btn-primary" onClick={() => dispatch (updateModule(module))} style={{marginRight: "5px"}}>Update</button>
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
                        <button className="btn btn-danger float-end" onClick={() => dispatch(deleteModule(module._id))} style={{marginRight: "5px"}}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
  

/* function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="wd-modules wd-kanbas">
        <ButtonsM/>
        
            {
            modules.filter((module) => module.course === courseId).map((module, index) => (
                <ul className="wd-modules list-group mb-3">
                    <li key={index} className="list-group-item list-group-item-secondary d-flex align-items-center">
                        <div className="col-">
                            <span style={{fontSize: "medium"}}>{module.name} </span> 
                            -
                            <span style={{fontSize: "smaller"}}> {module.description}</span>
                        </div>
                        <div className="col">
                            <div className="float-end d-flex align-items-center">
                                <AiFillCheckCircle style={{marginRight: "8px", fontSize: "20px", color: "green"}}/>
                                <BiPlus style={{marginRight: "5px", fontSize: "20px"}}/>
                                <BsThreeDotsVertical style={{fontSize: "20px"}}/>
                            </div>
                        </div>
                        
                    </li>
                    <li className="list-group-item d-flex align-items-center wd-module-content">
                        <div className="col-">
                            Content
                        </div>
                        <div className="col">
                            <div className="float-end d-flex align-items-center">
                                <BsThreeDotsVertical style={{fontSize: "20px"}}/>
                            </div>
                        </div>
                    </li>
                </ul>
            ))
            }
       
    </div>
  );
} */

export default ModuleList;