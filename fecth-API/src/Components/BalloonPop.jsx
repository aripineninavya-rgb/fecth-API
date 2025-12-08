import { useEffect, useState } from "react";
import "./BalloonPop.css";
function BalloonPop(){
    const[balloons, setBalloons] = useState([]);
    const fetchBalloons = async () =>{
        const newBalloons = [];
        for (let i=0; i<5; i++){
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        newBalloons.push({id: i, joke: data.setup + "..." + data.punchline, popped: false, left:Math.random() * 80});
    } 
    setBalloons(newBalloons);

};


useEffect(() => {
    fetchBalloons();
}, []);

const popBalloon = (id) => {
    setBalloons(balloons.map(b => b.id === id ? {...b, popped: true} : b));
};

return (
    <div>
        <h2></h2>
        <button onClick={fetchBalloons}>Reset Balloons</button>
        <div className="balloon-container">
            {balloons.map(b => 
                !b.popped &&(
                    <img
                        key={b.id}
                        src="/balloon.png"
                        className="balloon"
                        style={{left: `${b.left}%`}}
                        onClick={() => popBalloon(b.id)}
                        alt="balloon"
                    />
                    
                )
            )}
            {
                balloons.map(b =>
                    b.popped && <p key={b.id} className="popped-joke">{b.joke}</p>
                )
            }
        </div>
    </div>
);
}

export default BalloonPop;