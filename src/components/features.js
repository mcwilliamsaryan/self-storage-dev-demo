import '../App.css';
import indoor from '../images/ic_indoor.jpg';
import access from '../images/ic_access.jpg';
import clean from '../images/ic_clean.jpg';
import convenient from '../images/ic_convenient.jpg';
import calendar from '../images/ic_calendar.jpg';
import carts from '../images/ic_carts.jpg';

const Features = () => {
    return (
        <section className='features'>
            <h1 className='h1Title'>FEATURES</h1>

            <div className="row">
                <div className="column featBorders">
                    <img class="svg" alt="Logo" src={indoor}></img>
                    <p>Indoor Units</p>
                </div>
                <div className="column featBorders">
                    <img class="svg" alt="Logo" src={access}></img>
                    <p>Secure Access</p>
                </div>
                <div className="column featBorders">
                    <img class="svg" alt="Logo" src={clean}></img>
                    <p>Clean</p>
                </div>
                <div className="column featBorders">
                    <img class="svg" alt="Logo" src={convenient}></img>
                    <p>Convenient</p>
                </div>
                <div className="column featBorders">
                    <img class="svg" alt="Logo" src={calendar}></img>
                    <p>Open 7 Days a Week</p>
                </div>
                <div className="column">
                    <img class="svg" alt="Logo" src={carts}></img>
                    <p>Carts</p>
                </div>
            </div>
        </section>
    );
}

export default Features;