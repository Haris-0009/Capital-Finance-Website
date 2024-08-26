import { House} from 'lucide-react';
import { Users } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Contact } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react'
import { Banknote } from 'lucide-react';

// import {isSiderVisible} from "./Navbar"


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
      <div className="siderbar">
        <div className={`Sider ${isSiderVisible ? "" : "hidden"}`}>
        <button onClick={handleSiderToggle}>
        {isSiderVisible ? <Menu size={28} color="#000000" strokeWidth={1.75} />: <Plus size={28} color="#000000" strokeWidth={1.75} />}
      </button>
        <div className="Options">
          <ul>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? <span style={{marginTop : "10px"}}> <Banknote size={24} color="black" strokeWidth={1.75} /> Home</span> : <Banknote size={24} color="black" strokeWidth={1.75} />}
            </li>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? 'About' : <Users />}
            </li>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? 'Service' : <HandPlatter />}
            </li>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? 'Contact' : <Contact />}
            </li>
          </ul>
        </div>
      </div>
      </div>
      
      </>
    
    )

}

export default Sider;