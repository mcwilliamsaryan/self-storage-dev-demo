import '../App.css';

const Jumbotron = () => {
    return (
        <div className='background'>
            <div class='container'>
                <div class="hContainer">
                    <h1>FOR ALL YOUR STORAGE NEEDS</h1>
                    <h3>Select A FACILITY NEAR YOU</h3>
                </div>
                <div class='card'>
                    <button class="myButtonTopCard">LOCATION 1</button>
                    <button class="myButtonTopCard">LOCATION 2</button>
                </div>
                <div class='cardDeal'>
                    <h4>First month 50% off</h4>
                </div>
            </div>
        </div>
    )
};

export default Jumbotron;
