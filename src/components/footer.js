import { Component } from 'react';
import '../App.css';
import logo from '../images/demowhitelogo.jpg';

class Footer extends Component {

    render() {
        return (
            <section className="footer">
                <div className="nav-container">
                    <div className="brand">
                        <img className="logo" alt="storageLogo" src={logo}></img>
                    </div>
                    <nav>
                        <div><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <a href="#!" style={{ color: "white" }}>Home</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "white" }}>Locations</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Location 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Location 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "white" }}>What Size Unit?</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Size 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Size 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Size 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "white" }}>Category</a>
                                <ul class="navbar-dropdown">
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Category 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Category 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" style={{ color: "white" }}>Category 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "white" }}>Contact</a>
                            </li>
                            <li>
                                <a href="#!" style={{ color: "white" }}>Pay Online</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Footer;