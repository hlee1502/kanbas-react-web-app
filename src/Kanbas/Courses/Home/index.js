import ModuleList from "../Modules/ModuleList";
import "./index.css";
import Status from "./status";

function Home() {
  return (
    <div className="wd-home">
        <div className="row flex-row-container">
            <div className="col-9">
                <ModuleList />
            </div>
            <div className="col-3">
                <Status/>
            </div>
        </div>
        
    </div>
  );
}

export default Home;