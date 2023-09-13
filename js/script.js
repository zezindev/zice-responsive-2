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

//  mask
$("#phone").mask("(000)-000-0000")

//map

var customIcon = L.icon({
  iconUrl: "./imgs/map-marker.png", // Caminho correto para a sua imagem personalizada
  iconSize: [32, 40], // Tamanho da imagem
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone (geralmente no centro da parte inferior)
  popupAnchor: [0, -32], // Ponto de ancoragem do popup (acima do ícone)
})

var map = L.map("map").setView([45.504, -73.595], 14)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  // attribution:
  //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

var marker = L.marker([45.504, -73.595], { icon: customIcon }).addTo(map)
marker.bindPopup("ZICE Solutions").openPopup()
