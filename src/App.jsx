import { useState } from 'react'
import './App.css'
import { House, User } from 'lucide-react';
import { Users } from 'lucide-react';
import { HandPlatter } from 'lucide-react';
import { Contact } from 'lucide-react';
import { Menu } from 'lucide-react';






const ToggleButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Menu/>
    </button>
  )
}

function App() {
  const [isSiderVisible, setSiderVisible] = useState(true);

  const handleSiderToggle = () => {
    setSiderVisible(prev => !prev);
  }

  return (
    <>
      <div className="toggle-btn">
        <ToggleButton onClick={handleSiderToggle} />
      </div>
      <div className={`Sider ${isSiderVisible ? "" : "hidden"}`}>
        <div className="Options">
          <ul>
            <li className={`list ${isSiderVisible ? "" : "small"}`}>
              {isSiderVisible ? 'Home' : <House />}
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
    </>
  )
}

export default App;
