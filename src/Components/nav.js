import React, { Component} from "react";

class Nav extends Component {

  render() {
    
    return (
        <nav>
            <ul>
                <li>
                    <a href="#speakers">Speakers</a>
                </li>
                <li>
                    <a href="#sponsors">Sponsors</a>
                </li>
                <li>
                    <a href="#gallery">2019 Gallery</a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
