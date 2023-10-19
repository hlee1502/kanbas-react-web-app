import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import ButtonsM from "./ButtonsM";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="wd-modules">
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
}

export default ModuleList;