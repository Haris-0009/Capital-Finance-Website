


const Navbar = ({ isSiderVisible, handleSiderToggle }) =>{


    return(
      <nav className="navbar"> 
          <div className="nav-sider">
            <h2 className="Heading"><span style={{fontWeigh: "bold"}}>C</span>apital</h2>
          </div>   
        <ul className="links">
          <div className="link-list">
            <li>Wealth</li>
          </div>
          <div className="link-list">
            <li>Team</li>
          </div>
          <div className="link-list">
            <li>Tax</li>
          </div>
          <div className="link-list">
            <li>Services</li>
          </div>
          <div className="link-list">
            <li>Vault</li>
          </div>
        </ul>
        <img className= "account" src="./profile.jpg" alt="profile" />
      </nav>
       
    )
}




export default Navbar;