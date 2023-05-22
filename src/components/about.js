import demo from '../images/demoresize.jpg';

const About = () => {

    return (
        <div class="container-fluid-about">
            <div class="rowAbout">
                <div class="card-container">
                    <img className="demoImg" alt="storageLogo" src={demo}></img>
                </div>
                <div class="card-container">
                    <div className="aboutText">

                        <h5 className="card-title">ABOUT US</h5>
                        <p className="card-text">
                            Whether you are running out of room in your home or apartment or dealing with a major life change, the need for a personal storage solution is bound to arise. It's natural to collect things over time, but there comes a point when those things can clutter your living space, garage, attic or basement.
                            <br></br><br></br>
Moving to a new home or reclaiming your living space is easy when you invest a little in self storage. Self storage can be temporary or long-term, with simple move in options and the piece of mind knowing your belongings are secure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
