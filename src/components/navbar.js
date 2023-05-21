import { Component } from 'react';
import '../App.css';
import logo from '../images/logo_demo.jpg';

class Navbar extends Component {

    render() {
        return (
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <img className="logo" alt="storageLogo" src={logo}></img>
                    </div>
                    <nav>
                        <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                        <ul className="nav-list">
                            <li>
                                <a href="#!">Home</a>
                            </li>
                            <li>
                                <a href="#!">Locations</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!">Location 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Location 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">What Size Unit?</a>
                                <ul className="navbar-dropdown">
                                    <li>
                                        <a href="#!">Size 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Size 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Size 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Category</a>
                                <ul class="navbar-dropdown">
                                    <li>
                                        <a href="#!">Category 1</a>
                                    </li>
                                    <li>
                                        <a href="#!">Category 2</a>
                                    </li>
                                    <li>
                                        <a href="#!">Category 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                            <li>
                                <button className="myButton" style={{ backgroundColor: '#2267b4' }}>
                                    Pay Online
                                    </button>
                            </li>
                            <li>
                                <button className="myButton2" style={{ backgroundColor: '#f2f2f2', color: 'black' }}>
                                    Give Us a Call: 555-555-5555
                                    </button>
                            </li>

                        </ul>
                    </nav>
                </div>
            </section >
        )
    }
}

export default Navbar;