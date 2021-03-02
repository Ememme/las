import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃"
};

const trees = document.querySelectorAll(".tree").forEach(item => {
  item.addEventListener("mouseover", event => {
    if (item.classList.contains("treasure")) {
      item.innerHTML = images.treasure;
      alert("Znalazłeś SKARB!!!!");
    } else {
      item.innerHTML = images.leafs;
    }
  });
});
