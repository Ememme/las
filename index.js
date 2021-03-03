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

const trees = document.querySelectorAll(".tree").forEach(item => {
  item.addEventListener("mouseover", event => {
    if (item.classList.contains("treasure")) {
      item.innerHTML = images.treasure;
      sound.play();
      alert("Znalazłeś SKARB!!!!");
    } else {
      item.innerHTML = images.leafs;
    }
  });
});
