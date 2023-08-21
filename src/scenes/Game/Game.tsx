import { If } from "../../helpers";
import "./Game.css";
import clouds from "/clouds.png";
import mario from "/mario.gif";
import marioStop from "/mario-stop.gif";
import pipe from "/pipe.png";
import floor from "/floor.png";
import gameOver from "/game-over.png";

type Props = {
  count: number;
  start: boolean;
};

const Game: React.FC<Props> = ({ count, start }) => {
  return (
    <>
      <div className="game-board">
        <img id="clouds" className="clouds" src={clouds} alt="clouds" />
        <If hasCondition={start}>
          <>
            <img className="pipe" src={pipe} alt="pipe" />
            <img className="mario" src={mario} alt="mario" />
          </>
        </If>
        <If hasCondition={!start && count === 0}>
          <>
            <img className="mario-stop" src={marioStop} alt="mario" />
          </>
        </If>
        <If hasCondition={!start && count === 1}>
          <>
            <img className="pipe-position" src={pipe} alt="pipe" />
            <img className="game-over" src={gameOver} alt="gameOver" />
          </>
        </If>
      </div>
      <If hasCondition={start}>
        <>
          <img className="floor" src={floor} alt="floor" />
          <div id="reloadButton" className="madeBy">
            {" "}
            Feito por Pedro Colletti 👋
          </div>
        </>
      </If>
      <If hasCondition={!start && count === 0}>
        <>
          <img className="floor" src={floor} alt="floor" />
          <div id="reloadButton" className="madeBy">
            aperte ESPAÇO para jogar
          </div>
        </>
      </If>
      <If hasCondition={!start && count === 1}>
        <>
          <img className="floor" src={floor} alt="floor" />

          <div id="reloadButton" className="madeBy">
            aperte ESPAÇO recomeçar
          </div>
        </>
      </If>
    </>
  );
};

export default Game;
