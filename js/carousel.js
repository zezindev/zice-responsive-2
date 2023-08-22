const innerDiv = document.querySelector(".inner-div")
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const dots = document.querySelectorAll(".dot")
let currentIndex = 0
const totalImages = 3

function showImage(index) {
  innerDiv.style.transform = `translateX(-${index * 380}px)`

  dots.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === index)
  })
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + totalImages) % totalImages
  showImage(currentIndex)
}

leftArrow.addEventListener("click", () => {
  navigate(-1)
})

rightArrow.addEventListener("click", () => {
  navigate(1)
})

setInterval(() => {
  navigate(1)
}, 5000)

showImage(currentIndex)
