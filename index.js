import "./style.css";
import { Howl } from "howler";

const sound = new Howl({
  src: [
    "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav"
    ]
});

const images = {
  treasure: "💰",
  leafs: "🍃"
};

const forrest = document.querySelectorAll(".tree");

forrest.forEach(item => {
  item.addEventListener("mouseover", event => {
    if (event.target.classList.contains("treasure")) {
      item.innerHTML = images.treasure;
      congratulations();
    } else {
      item.innerHTML = images.leafs;
    }
  });
});

function congratulations() {
  sound.play();
  alert("Znalazłeś skarb");
}
