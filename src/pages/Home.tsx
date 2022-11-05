import { useEffect, useState } from 'react';
import paper from '../assets/icon-paper.svg';
import rock from '../assets/icon-rock.svg';
import scissors from '../assets/icon-scissors.svg';



const Home = () => {
    const [score, setScore] = useState(0);

    const [userPick, setUserPick] = useState('');
  
    let randomWeapon = Math.floor(Math.random() * 3);
    const weaponArray: string[] = ['rock', 'paper', 'scissors'];

    const [computerPick, setComputerPick] = useState(weaponArray[randomWeapon]);

    let displayMessage:string

    function handlePicks(element: string) {
        randomWeapon  = Math.floor(Math.random()*3)
        setUserPick(element);
        setComputerPick(weaponArray[randomWeapon]);
            
        if (userPick === 'paper' && computerPick === 'rock') {
            displayMessage = 'YOU WIN'
        }
        else if (userPick === 'paper' && computerPick === 'scissors') {
            displayMessage= 'YOU LOSE'
        }
            
        else if (userPick === 'rock' && computerPick === 'scissors') {
            displayMessage = 'YOU WIN'
        }
        else if (userPick === 'rock' && computerPick === 'scissors') {
            displayMessage= 'YOU LOSE'
        }
            
        else if (userPick === 'scissors' && computerPick === 'paper') {
            displayMessage = 'YOU WIN'
        }
        else if (userPick === 'scissors' && computerPick === 'rock') {
            displayMessage= 'YOU LOSE'
        }
        else {
            displayMessage ='DRAW'
        }
        

        console.log(userPick, computerPick,displayMessage);
    }
    // useEffect(
    //     () => {
    //         //randomWeapon  = Math.floor(Math.random()*3)
    //         console.log(randomWeapon);
    //     }
    // );


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
                    <>
                        <div className="weapon-container paper" onClick={() => handlePicks('paper')}>
                            <img src={paper} className='weapon-icon' alt="" />
                        </div>


                        <div className="weapon-container scissors" onClick={() => handlePicks('scissors')}>
                            <img src={scissors} className='weapon-icon' alt="" />
                        </div>


                        <div className="weapon-container rock" onClick={() => handlePicks('rock')}
                        >
                            <img src={rock} className='weapon-icon' alt="" />
                        </div>

                    </>
                </div>



            </main>

            <button>RULES</button>



        </div>
    </>);
};

export default Home;