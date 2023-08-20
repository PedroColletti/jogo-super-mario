import "./Game.css";
import clouds from "/clouds.png";
import mario from "/mario.gif";
import pipe from "/pipe.png";

type Props = {};

const Game: React.FC<Props> = () => {
  return (
    <>
      <div className="game-board">
        <img className="clouds" src={clouds} alt="clouds" />
        <img className="mario" src={mario} alt="mario" />
        <img className="pipe" src={pipe} alt="pipe" />
      </div>
      <div className="madeBy"> Feito por Pedro Colletti </div>
    </>
  );
};

export default Game;
