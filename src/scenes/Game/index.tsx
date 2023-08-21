import { useState } from "react";
import Game from "./Game";

const GameContainer: React.FC = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const mario = document.querySelector(".mario");
  const pipe = document.querySelector(".pipe") as HTMLElement;
  const marioElements = document.querySelector(".mario") as HTMLElement;
  const reloadButton = document.getElementById("reloadButton");

  reloadButton?.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      setStart(true);
    }
  });

  const windowWidth = window.innerWidth;
  const value = windowWidth > 900 ? 750 : 1750;

  if (!start) {
    const jump = () => {
      setStart(true);
      mario?.classList.add("jump");

      setTimeout(() => {
        mario?.classList.remove("jump");
      }, value);
    };

    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        setStart(true);
        setStart(true);
        jump();
      }
    });
  } else {
    const jump = () => {
      setStart(true);
      mario?.classList.add("jump");

      setTimeout(() => {
        mario?.classList.remove("jump");
      }, value);
    };

    document.addEventListener("keydown", function (event) {
      if (event.code === "Space") {
        setStart(true);
        jump();
      }
    });

    const loop = setInterval(() => {
      if (mario) {
        const pipePosition = pipe?.offsetLeft;

        const marioPosition = +window
          .getComputedStyle(mario)
          .bottom.replace("px", "");

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
          pipe.style.animation = "none";
          pipe.style.left = `${pipePosition}px`;

          marioElements.style.animation = "none";
          marioElements.style.bottom = `${marioPosition}px`;

          setStart(false);
          setCount(+1);

          clearInterval(loop);
        }
      }
    }, 10);
  }
  return <Game start={start} count={count} />;
};
export default GameContainer;
