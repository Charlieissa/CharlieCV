import React from "react";
import "./Navbar.css"; // Import the CSS file
import { SocialIcon } from "react-social-icons";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "home",
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(section) {
    this.setState({ activeSection: section });
  }

  render() {
    return (
      <>
        <nav>
          <ul>
            <li className="logo">Charlie</li>
            <li>
              <a href="#home" onClick={() => this.handleNavClick("home")}>
                AboutMe
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                onClick={() => this.handleNavClick("Experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => this.handleNavClick("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#programmingLanguage"
                onClick={() => this.handleNavClick("programmingLanguage")}
              >
                Programming language
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => this.handleNavClick("education")}
              >
                Education
              </a>
            </li>
            <li>
              <SocialIcon
                url="https://github.com/Charlieissa"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
            <li>
              <SocialIcon
                url="https://www.linkedin.com/in/charlie-issa-3a8833116?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxeYA5SkgQkWzxXYjmM%2BwWg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
