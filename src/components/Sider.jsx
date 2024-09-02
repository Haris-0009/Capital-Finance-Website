
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react'



const Sider = () => {

  const [isSiderVisible, setSiderVisible] = useState(true);

  useEffect(() => {
  const handleresize = () => {


    if(window.innerWidth <= 600){
      setSiderVisible(false)
    }
    window.addEventListener('resize' , handleresize)
  return () => window.removeEventListener('resize' , handleresize)
  }
  handleresize()
  },[])
  const handleSiderToggle = () => {
    setSiderVisible(prev => !prev);
  }
  console.log(isSiderVisible , "isSiderVisible")
    return(
      <>
      <div className="sider-btn">
      <button onClick={handleSiderToggle}>
        {isSiderVisible ? <Menu size={23} color="#000000" strokeWidth={1.75} />: <Plus size={23} color="#000000" strokeWidth={1.75} />}
       </button>  
      </div>
      <div className="siderbar">
        <div className={`Sider ${isSiderVisible ? "" : "hidden"}`}>
          <div className={`sider-field ${isSiderVisible ? "" : "small"}`}>
          {isSiderVisible ?  <input type="text" placeholder="Search accounts"/> : <span className="sider-logo"><img src="search.png" alt="" /></span>}
          </div>
          <div className={`add-btn ${isSiderVisible ? "" : "add-btn-hide" }`}>
            {isSiderVisible ? <button><span>&#43;</span>   Add Account</button> : <button><span>&#43;</span></button>}
          </div>
          <div>
            <hr className="sider-line" style={{marginBottom : "10px"}}/>
          </div>
        <div className="Options">
          <ul>
             <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>$20.98M</p><p>12.6%</p> </span> : <span className="sider-logo"><img src="grid.png" alt="" /></span>}
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Cash</p><p>$2.80M</p> </span>: <span className="sider-logo"><img src="money.png" alt="" /></span>}
            </li>   
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Public Assets</p><p>$1.85M</p> </span> : <span className="sider-logo"><img src="signal-status.png" alt="" /></span>}  
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Crypto</p><p>$341.43K</p> </span> : <span className="sider-logo"><img src="bitcoin.png" alt="" /></span>}    
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Company Equity</p><p>$8.85M</p> </span> : <span className="sider-logo"><img src="pie-chart.png" alt="" /></span>}
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Private Investment</p><p>$610.50K</p> </span> : <span className="sider-logo"><img src="bar-chart.png" alt="" /></span>}
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Fund Investments</p><p>$455.00K</p> </span> : <span className="sider-logo"><img src="venn-diagram.png" alt="" /></span>}
            </li>
            <hr className="list-line"/>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Real Estate</p><p>$3.90M</p> </span> : <span className="sider-logo"><img src="home.png" alt="" /></span>}
            </li>
          </ul>
          {/* <div>
            <ul>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span><p>Real Estate</p><p>$3.90M</p> </span> : <span className="sider-logo"><img src="home.png" alt="" /></span>}
            </li>
            </ul>
          </div> */}
          
        </div>
      </div>
      </div>
      
      </>
    
    )

}

export default Sider;