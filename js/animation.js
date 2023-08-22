const elements = document.querySelectorAll(".hidden")

function animateElements() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", animateElements)
window.addEventListener("load", animateElements)
