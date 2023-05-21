import '../App.css';
import shield from '../images/ic_shield.jpg';
import question from '../images/ic_question.jpg';
import ruler from '../images/ic_ruler.jpg';

const Questions = () => {
    return (
        <section className="questionsBackground">
            <div>
                <div class="card-container">
                    <div className="column cardQuestion">
                        <img className="cardSvg" alt="Logo" src={shield}></img>
                        <h2 className="card-title">NEW TO STORAGE?</h2>
                        <p className="card-text">View our Storage Tips page for ways to get the most out of your unit.</p>
                        <button className="card-button">Storage Tips</button>
                    </div>
                    <div className="column cardQuestion">
                        <img className="cardSvg" alt="Logo" src={question}></img>
                        <h2 className="card-title">HAVE QUESTIONS?</h2>
                        <p className="card-text">View our FAQs page for answers to all our frequently asked questions.</p>
                        <button className="card-button">FAQs</button>
                    </div>
                    <div className="column cardQuestion">
                        <img className="cardSvg" alt="Logo" src={ruler}></img>
                        <h2 className="card-title">NOT SURE ON SIZE?</h2>
                        <p className="card-text">View our Size Guide to get a better idea of what fits in each unit.</p>
                        <button className="card-button">Size Guide</button>
                    </div>
                </div>
            </div>
        </section >
    )
};

export default Questions;