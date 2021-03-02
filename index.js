import "./style.css";

const images = {
  treasure: "💰",
  leafs: "🍃"
};

const trees = document.querySelectorAll(".tree").forEach(item => {
  item.addEventListener('mouseover', event => {
    if (item.classList.contains('treasure')) {
      console.log('Skarb!')
    } else {
      console.log('Drzewo')
    }
  })
})

