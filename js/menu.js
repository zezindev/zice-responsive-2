// List menu animation

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.3s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
)
mobileNavbar.init()

// Icon menu animation

const icon = document.getElementById("icon")
let iconClicked = false

icon.addEventListener("click", () => {
  if (iconClicked) {
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
    
  } else {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-xmark")
  }
  iconClicked = !iconClicked
})
