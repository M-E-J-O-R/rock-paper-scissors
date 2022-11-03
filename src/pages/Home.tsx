import paper from '../assets/icon-paper.svg';
import rock from '../assets/icon-rock.svg';
import scissors from '../assets/icon-scissors.svg';
const Home = () => {
    return (<>
        <div className='Home'>
            <header>
                <section className="title">
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </section>
                <section className="score">
                    <p id="score-tag">SCORE</p>
                    <p>12</p>
                </section>
            </header>
            <main>
                <div className='game-board'>

                    {/* <img className='game-icon paper' src={paper} alt="paper" />
                <img className='game-icon scissors' src={scissors} alt="scissors" /> */}

                    <div className="weapon-container paper">
                        <img src={paper} className='weapon-icon' alt="" />
                    </div>


                    <div className="weapon-container scissors">
                        <img src={scissors} className='weapon-icon' alt="" />
                    </div>


                    <div className="weapon-container rock">
                        <img src={rock} className='weapon-icon' alt="" />
                    </div>



                </div>



            </main>

            <button>RULES</button>



        </div>
    </>);
};

export default Home;