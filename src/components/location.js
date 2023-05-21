import React from 'react';
import '../array.php';
import map from '../images/map-multiple-locations-google-maps-min.jpg'
import pin1 from '../images/pin1.jpeg'
import pin2 from '../images/pin2.jpeg'
import phone from '../images/ic_phone.jpg'

const Location = () => {
    return (
        <div className="container-fluid location">
            <div className="row">
                <div className="col-md-7">
                    <div className="card-group location">
                        <div className="cardLocation">
                            <div className="card-body location">
                                <div className="pin">
                                    <img src={pin1} alt="Pin Image" className="pin" />
                                </div>
                                <div className="featCardBorders">
                                    <h5 className="card-title">Location 1</h5>
                                    <p className="card-text">456 Second Street, City, State</p>
                                    <p className="card-text">Country</p></div>
                                <div className="featCardBordersNum">
                                    <div className="pin">
                                        <img src={phone} alt="phoneIcon" className="phone" />
                                    </div>
                                    <h5>555-555-5555</h5>
                                </div>

                                <div className="featCardBordersBtn"><button className="btn btn-primary rounded-pill" style={{ backgroundColor: '#2267b4' }}>
                                    Contact
                </button>
                                </div>
                            </div>
                        </div>
                        <div className="cardLocation">
                            <div className="card-body location">
                                <div className="pin">
                                    <img src={pin2} alt="icon" className="pin" />
                                </div>
                                <div className="featCardBorders">
                                    <h5 className=" card-title">Location 2</h5>
                                    <p className="card-text">456 Second Street, City, State</p>
                                    <p className="card-text">Country</p></div>
                                <div className="featCardBordersNum">
                                    <div className="pin">
                                        <img src={phone} alt="icon" className="phone" />
                                    </div>
                                    <h5>555-555-5555</h5>
                                </div>

                                <div className="featCardBordersBtn">
                                    <button className="btn btn-primary rounded-pill" style={{ backgroundColor: '#2267b4' }}>
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={map} alt="Background Image" className="map" />
                </div>
            </div>
        </div >
    );
};

export default Location;
