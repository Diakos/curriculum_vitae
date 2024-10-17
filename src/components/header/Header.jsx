import { FaEnvelope, FaLinkedin, FaPhone, FaMedium } from "react-icons/fa"
import { Profile } from "../../assets/image"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content grid items-center">
                    <div className="header-intro">
                        <div className="flex items-end header-intro-wrapper">
                            <img src={Profile} alt="profile" className="profile" />
                            <h1 className="header-info text-white">Jannis Diakodimitriou</h1>
                        </div>
                            <p className="header-text text text-white">As a seasoned software engineer and project manager, I bring a wealth of technical knowledge and experience to the table. With a background in computer engineering and informatics and expertise in various coding languages and systems, I have a proven track record of delivering complex software solutions and managing cross-functional teams.

                                I am passionate about bridging the gap between technology and business, and I thrive in fast-paced, dynamic environments. Whether it's leading Agile product teams, developing and implementing software solutions, or communicating with customers, I am driven by a desire to help businesses achieve their ambitions faster.</p>
                        </div>
                        <div className="header-contact">
                            <ul className="contact-info-list grid">
                                <li className="grid items-start info-item">
                                    <span className="info-item-icon">
                                        <FaEnvelope size={13} />
                                    </span>
                                    <p className="info-item-text">
                                        Email: <span className="text">jdiakos75@gmail.com</span>
                                    </p>
                                </li>
                                <li className="grid items-start info-item">
                                    <span className="info-item-icon">
                                        <FaPhone size={13} />
                                    </span>
                                    <p className="info-item-text">
                                        Phone: <span className="text">+30 6948 948891</span>
                                    </p>
                                    
                                </li>
                            </ul>
                            <ul className="social-info-list flex items-center">
                                <li className="social-item">
                                    <Link to="https://www.linkedin.com/in/ioannis-jannis-diakodimitriou-490850119/" target="_blank">
                                        <FaLinkedin />
                                        <span className="tooltip-text"> LinkedIn</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="social-info-list flex items-center">
                                <li className="social-item">
                                    <Link to="https://medium.com/@jdiakos75" target="_blank">
                                        <FaMedium />
                                        <span className="tooltip-text"> Medium</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        

        </header>
    )
}

export default Header