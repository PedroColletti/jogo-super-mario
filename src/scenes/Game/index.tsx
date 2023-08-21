import { useState } from "react";
import Game from "./Game";

const GameContainer: React.FC = () => {
  const [start, setStart] = useState(false);
  const mario = document.querySelector(".mario");
  const pipe = document.querySelector(".pipe") as HTMLElement;
  const marioElements = document.querySelector(".mario") as HTMLElement;
  const imgElement = document.querySelector(".mario") as HTMLImageElement;
  const clouds = document.querySelector(".clouds") as HTMLElement;

  const jump = () => {
    mario?.classList.add("jump");

    setTimeout(() => {
      mario?.classList.remove("jump");
    }, 750);
  };

  const loop = setInterval(() => {
    if (mario) {
      const pipePosition = pipe?.offsetLeft;

      const cloudPosition = +window
        .getComputedStyle(clouds)
        .left.replace("px", "");

      const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = "none";
        clouds.style.left = `${cloudPosition}px`;

        marioElements.style.animation = "none";
        marioElements.style.bottom = `${marioPosition}px`;

        imgElement.src = "./game-over.png";
        marioElements.style.width = "70px";
        marioElements.style.marginLeft = "50px";
        marioElements.style.zIndex = "9999";

        setStart(true);
        clearInterval(loop);
      }
    }
  }, 10);

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      jump();
    }
  });

  console.log("start", start);

  const reloadButton = document.getElementById("reloadButton");

  reloadButton?.addEventListener("click", function () {
    location.reload();
  });

  return <Game start={start} />;
};
export default GameContainer;
