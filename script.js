
var images = [
  "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
  "https://images.unsplash.com/photo-1597357821540-3dc1852ef417",
  "https://images.unsplash.com/photo-1570018144715-43110363d70a"
];
var current = 0;

function showImg(idx) {
  document.getElementById('carousel-img').src = images[idx];
}

function prevImg() {
  current = (current - 1 + images.length) % images.length;
  showImg(current);
}

function nextImg() {
  current = (current + 1) % images.length;
  showImg(current);
}
