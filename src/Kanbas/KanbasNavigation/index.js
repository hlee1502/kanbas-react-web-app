import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia"
import { AiOutlineClockCircle } from "react-icons/ai"
import { PiProjectorScreenBold } from "react-icons/pi"
import { AiOutlineQuestionCircle } from "react-icons/ai"

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Help"];
    const linksToIconsMap = {
        Account: <MdOutlineAccountCircle className="text wd-icon-color"/>,
        Dashboard: <AiOutlineDashboard className="text wd-icon-color" />,
        Courses: <BiBook className="text wd-icon-color" />,
        Calendar: <IoCalendarOutline className="text wd-icon-color" />,
        Inbox: <LiaEnvelopeOpenTextSolid className="text wd-icon-color"/>,
        History: <AiOutlineClockCircle className="text wd-icon-color"/>,
        Studio: <PiProjectorScreenBold className="text wd-icon-color"/>,
        Help: <AiOutlineQuestionCircle className="text wd-icon-color"/>
  };

  const { pathname } = useLocation();
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <div className="wd-kanbas-navigation list-group">
            <div className="text-center mt-2 mb-2">
                <img src="../../images/northeastern-logo.png" className="wd-logo"/>
            </div>
            {links.map((link, index) => (
                <Link key={index} to={`/Kanbas/${link}`} className={`list-group-item text-center align-items-center ${pathname.includes(link) && "active"}`}>    
                    {linksToIconsMap[link]}
                    <br />
                    {link}            
                </Link>
            ))}
        </div>
    </div>
    
  );
}
export default KanbasNavigation;