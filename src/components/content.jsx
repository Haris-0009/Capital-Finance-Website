import { Ellipsis } from "lucide-react";
import Sider from "./Sider";
import Maingrid from "./Maingrid";


const Content = () => {
    return (
        <>
            <div className="main-content"> 
            <div className="head">
                <div className="head-title">
                    <img src="/money-bag.png" alt="" />
                <h2>Wealth</h2>
                <p>
                    All informations about your finances
                </p>
                </div>      
                <div className="head-btn">
                    <div className="buttons">
                    <button>Accounts</button>
                    <button>Transactions </button>       
                    <button>Flows</button>
                    </div>
                        <span>&#124;</span>
                    <div className="menu-btn">
                    <button><Ellipsis/></button>
                    </div>
                </div>
            </div>
            <div className="main-dashbord" style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="sider-div">
                    <Sider /> 
                </div>
                <div className="dashboard-div">
                    <Maingrid/>  
                </div>
            </div>
        </div>
            
        </>

    )


}

export default Content;