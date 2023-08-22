//Theme change
const chk = document.getElementById("chk")
const savedTheme = localStorage.getItem("theme")

// Aplicar o tema salvo ao carregar a página
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme")
  chk.checked = true
}

chk.addEventListener("change", () => {
  if (chk.checked) {
    document.body.classList.add("dark-theme")
    localStorage.setItem("theme", "dark")
  } else {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("theme", "light")
  }
})
