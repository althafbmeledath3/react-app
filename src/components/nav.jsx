

import React from "react";


class Nav extends React.Component{

    render() {
      return (
        <div>
           <nav className="navbar">
          <div className="logo">
            CarWow
          </div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Sell Your Car</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        </div>
      )
    }
}

export default Nav