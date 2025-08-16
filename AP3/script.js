// Carousel Logic
const images = [
  "https://picsum.photos/id/237/500/300",
  "https://picsum.photos/id/238/500/300",
  "https://picsum.photos/id/239/500/300",
  "https://picsum.photos/id/240/500/300"
];
let index = 0;

function showImage() {
  document.getElementById("carouselImage").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// API Fetch (Joke API)
async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });

  const data = await response.json();
  document.getElementById("jokeDisplay").textContent = data.joke;
}
