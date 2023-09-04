const images = document.querySelectorAll(".carousel img")
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const dotsContainer = document.getElementById("dots")
let currentIndex = 0

// Function to update the carousel display and pagination
function updateCarousel() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = "block"
    } else {
      image.style.display = "none"
    }
  })

  const dots = Array.from(dotsContainer.children)
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active")
    } else {
      dot.classList.remove("active")
    }
  })
}

// Function to handle the next button click
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length
  updateCarousel()
}

// Function to handle the previous button click
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  updateCarousel()
}

// Create dots for each image
images.forEach((_, index) => {
  const dot = document.createElement("span")
  dot.classList.add("dot")
  dot.addEventListener("click", () => {
    currentIndex = index
    updateCarousel()
  })
  dotsContainer.appendChild(dot)
})

// Set initial display
updateCarousel()

// Automatically advance the carousel every 3 seconds
setInterval(nextSlide, 3000)

// Add event listeners to the arrow buttons
nextButton.addEventListener("click", nextSlide)
prevButton.addEventListener("click", prevSlide)
